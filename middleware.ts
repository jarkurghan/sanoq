import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "uz", "ru"]
const defaultLocale = "uz"

function getLocale(request: NextRequest) {
  // Pathname ichida qo'llab-quvvatlanadigan locale bor-yo'qligini tekshiradi
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Agar locale yo'q bo'lsa, yo'naltirish amalga oshiriladi
  if (pathnameIsMissingLocale) {
    // Accept-Language header orqali foydalanuvchining afzal tilini aniqlash
    const acceptLanguage = request.headers.get("accept-language")
    let locale = defaultLocale

    if (acceptLanguage) {
      // Accept-Language header orqali oddiy locale aniqlash
      for (const supportedLocale of locales) {
        if (acceptLanguage.includes(supportedLocale)) {
          locale = supportedLocale
          break
        }
      }
    }

    return locale
  }

  return null
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Istisno: "/uz/publications/binary" uchun lang prefix tekshiruvi o'tkazilmaydi
  const skipPrefixes = ["/uz/info/", "/en/info/", "/ru/info/", "/images/"]
  if (skipPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next()
  }

  // Pathname da locale yo'qligini tekshiradi
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Agar locale yo'q bo'lsa, yo'naltirish amalga oshiriladi
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url))
  }
}

export const config = {
  // Matcher: `/_next/` va `/api/` ni inkor qiladi
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",],
}
