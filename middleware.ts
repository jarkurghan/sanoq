import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const locales = ["en", "uz", "ru"]
const defaultLocale = "uz"

function getLocale(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the preferred locale from Accept-Language header
    const acceptLanguage = request.headers.get("accept-language")
    let locale = defaultLocale

    if (acceptLanguage) {
      // Simple locale detection from Accept-Language header
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

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url))
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
