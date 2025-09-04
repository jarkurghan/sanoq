import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import Container from "@/components/common/container";
import { ARTICLES_002_SS_METALANG } from "@/lib/constants/article/sanoq-sistemasi";
import { SEO } from "@/lib/utils/generate-metadata";

export function generateMetadata(): Metadata {
    const lang = "tk";
    const url = ARTICLES_002_SS_METALANG[lang] as string;

    const title = "San ulgamlary — umumy syn, taryh we görnüşler";
    const description =
        "San ulgamlary barada giňişleýin makala: taryhy, esasy görnüşleri we sanlaryň medeniýetde, matematikada hem-de kompýuter tehnologiýalarynda beýan edilişi.";
    const keywords = [
        "san ulgamy",
        "sanan sistemasy",
        "hindi-arap sanlary",
        "sanlaryň taryhy",
        "onluk ulgam",
        "rim sanlary",
        "maya sanlary",
        "matematika",
        "san ýazuwy",
    ].join(", ");

    return SEO({ title, description, url, keywords, alterLangs: ARTICLES_002_SS_METALANG, lang, pageType: "article" });
}

const NumeralSystem = () => {
    return (
        <main className="flex">
            <article className="flex-1 text-justify">
                <Container className="prose prose-lg">
                    <header>
                        <h1>San sistemi</h1>
                    </header>
                    <section>
                        <h2 className="hidden">San sistemi</h2>
                        <p>
                            San sistemi — sanlary ýazuw görnüşinde görkezmegiň usuly, ýagny belli bir sanlar toplumyny belgiler ýa-da sanlar arkaly yzygiderli
                            we tertipli görnüşde görkezýän matematik ýazuw sistemidir.
                        </p>
                        <p>
                            Birmeňzeş belgiler yzygiderligi dürli san sistemlerinde dürli many berip biler. Mysal üçin,{" "}
                            <code className="[font-family:'Times_New_Roman',serif] px-1 py-0.5 rounded">"11"</code>
                            onluk san sisteminde (häzirki wagtda dünýäde iň giň ýaýran) on bir sanlaryny aňladýar, ikilik sisteminde (häzirki zaman
                            kompýuterlerinde ulanylýar) üç sanlaryny görkezýär, birlik sisteminde bolsa (hasap-çyzgy usulynda) iki sanlaryna deňdir.
                        </p>
                        <p>
                            Sanlaryň görkezýän manysy onuň <strong>gymmaty</strong> diýilýär. Ähli san sistemeleri birmeňzeş san toplumyny görkezmäge ukyply
                            däl; mysal üçin, Rim, Gresiýa we Müsür sanlarynda nol üçin aýratyn belgi ýok.
                        </p>
                        <p>Ideal san sistemi aşakdaky häsiýetlere eýe bolmaly:</p>
                        <ul>
                            <li>Peýdaly san toplumyny görkezmek (mysal üçin, ähli butun ýa-da rationallary)</li>
                            <li>Her bir sana özboluşly, anyk görkezme bermek (ýa-da iň bolmanda standart görnüşde)</li>
                            <li>Sanlaryň algebra we arifmetiki gurluşyny görkezmek</li>
                        </ul>
                        <p>
                            Mysal üçin, adaty onluk san sisteminde nol bilen deň bolmadyk her bir tebigy san, başy nol bolmadyk san bilen başlanýan çäkli
                            sanlaryň yzygiderligi arkaly özboluşly görkezilýär.
                        </p>
                        <p>
                            Käwagt san sistemelerine <em>sanlar sistemesi</em> diýlip hem at berilýär. Ýöne bu atlama anyk däl, sebäbi ol başga matematik
                            sistemeleri hem aňladyp biler: hakyky sanlar sistemi, kompleks sanlar sistemi, dürli giperkompleks sistemeler, p-adik sanlar sistemi
                            we ş.m. Emma bu makala şeýle sistemeler barada däl.
                        </p>
                    </section>

                    <section>
                        <h2>Taryh</h2>
                        <p>
                            Alymlaryň pikirine görä, ilkinji san sistemeleri dürli medeniýetlerde dürli görnüşde bolupdyr: babililer 60-luk sistemi ulanýar,
                            misirliler hieroglif sanlaryny döredýär, hytaýlylar taýajyk sanlary ulanypdyr. Maýylar bolsa özbaşdak 20-lik sistemi döredip, onuň
                            içine nol üçin ýörite alamat goşupdyrlar.
                        </p>
                        <Image
                            src="/images/historial_numeric_system.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 rounded-lg p-4"
                            alt="maya"
                            width={360}
                            height={120}
                        />
                        <p>
                            Hindistanly matematikler, meselem VII asyrda ýaşan <strong>Brahmagupta</strong>, arifmetiki düzgünleri sistemasyna salmakda we nol
                            düşünjesini ornaşdyrmakda möhüm rol oýnapdyr. Soňra yslam dünýäsindäki alymlar, şol sanda <strong>Al-Horezmi</strong>, bu pikirleri
                            ösdüripdir. San sistemeleri ösdürilen saýyn, pozisiýaly ýazuwyň peýdalylygy we noluň girizilmegi häzirki zaman san ýazuwynyň emele
                            gelmegine, dünýä söwdasyna, ylyma we tehnologiýa uly täsirini ýetiripdir.
                        </p>
                        <p>
                            Ilkinji hakyky pozisiýaly ýazuw sistemi <strong>hind–arap san sistemi</strong> hasaplanýar. Bu sistema VII asyrda Hindistanda emele
                            gelipdir
                            <sup className="text-gray-400">[1]</sup>, emma häzirki görnüşinde däl eken, sebäbi nol giňden kabul edilmedik. Noluň ýerine käte
                            nokat goýlupdyr ýa-da boş ýer galdyrylypdyr. Noluň ilkinji giňden kabul edilen ulanylyşy <strong>876-njy ýylda</strong> bolupdyr
                            <sup className="text-gray-400">[2]</sup>. Ilkinji sanlar häzirki sanlara gaty meňzeş bolupdyr, hatda belgiler hem diýen ýaly şol bir
                            bolupdyr
                            <sup className="text-gray-400">[1]</sup>.
                        </p>
                        <p>
                            XIII asyra çenli <strong>günbatar arap sanlary</strong> Ýewropanyň matematik gurşawynda kabul edilip başlan. Meselem,{" "}
                            <strong>Fibonachchi</strong> olary öz
                            <em>Liber Abaci</em> atly eserinde ulanypdyr. Başynda garşylyk bolsa-da, hind–arap sanlary hasaplamadaky amatlylygy sebäpli, esasan
                            bank we söwda ulgamynda, Ýewropada giňden ýaýrapdyr.
                        </p>
                        <p>
                            XV asyrda metbugat maşynynyň oýlanyp tapylmagy bu sanlaryň ulanylyşyny standartlaşdyrypdyr, sebäbi çap edilen matematik kitaplar Rim
                            sanlaryna garanyňda bu sistemany saýlapdyr. XV asyryň ahyryna çenli olar gündelik durmuşda giňden ulanylypdyr
                            <sup className="text-gray-400">[3]</sup>. XX asyryň ahyryna çenli dünýäniň ähli ýerinde kompýutersiz hasaplamalar arap sanlary bilen
                            ýerine ýetirilipdir, ýerli san sistemeleri bolsa diýen ýaly ulanyşdan çykypdyr.
                        </p>
                        <p>
                            XVII asyrda bu sistema ylmy işlerde agdyklyk edipdir we
                            <strong>Isaak Nýuton</strong> hem-de <strong>Rene Descartes</strong> ýaly alymlaryň matematik açyşlaryna täsirini ýetiripdir. XIX–XX
                            asyrlarda arap sanlarynyň giňden ýaýramagy dünýä maliýe, inženerçilik we tehnologiýanyň ösmegine ýol açyp, häzirki zaman
                            kompýuteriniň we sanly maglumat görkezmegiň düýbüni tutupdyr.
                        </p>
                    </section>

                    <section>
                        <h2>San belgilerini ulanan beýleki taryhy san sistemeleri</h2>
                        <Image
                            src="/images/maya.png"
                            className="dark:bg-slate-400 mb-4 float-right ml-4 p-4 border rounded-lg"
                            alt="maya"
                            width={160}
                            height={120}
                        />
                        <p>
                            <strong>Maya sanlarynyň</strong> takyk ýaşynyň nämedigi belli däl, emma olaryň hindi–arap sistemasyndanam köne bolmagy mümkin. Bu
                            sistema <em>vigesimal</em> (20-lik) bolup, ýigrimi sany belgi öz içine alýardy. Mayalar noly görkezmek üçin gabyk nyşanyny
                            ulanypdyrlar. Sanlar dik ýazylýar we birlikler aşakda ýerleşdirilýärdi. Mayalarda häzirki onluk bölüjä meňzeş nyşan bolmansoň,
                            olaryň sistemasy kesirleri görkezmeýärdi.
                        </p>
                        <p>
                            <strong>Tailand sanlary sistemi</strong> hindi–arap sistemasy bilen deňdir, diňe belgiler başgaça. Bu sanlaryň ulanylyşy Tailandda
                            öňküsi ýaly giň däl, emma henizem arap sanlary bilen bilelikde ulanylýar.
                            <sup className="text-gray-400">[4]</sup>
                        </p>
                        <Image
                            src="/images/rod-table.png"
                            className="mb-4 float-left mr-8 dark:opacity-60 border rounded-lg"
                            alt="rods"
                            width={500}
                            height={300}
                        />
                        <p>
                            <strong>Tayaç sanlary</strong> — hytaýly we ýapon matematikleri tarapyndan ulanylan ýazuw görnüşleri bolup, olar onluk pozision
                            sistemada hasaplamalary ýerine ýetirmek üçin peýdalanylypdyr. Tayaçlar hasap doskasyna goýulyp, öňe ýa-da yza süýşürilip, onluk
                            dereje üýtgedilýärdi.
                        </p>
                        <p>
                            Biziň eramyzdan III–V asyrlaryna degişli <em>Sūnzĭ Suànjīng</em> atly matematiki eser bu sistema barada giňişleýin görkezme berýär.
                            Onuň b.e.öňki IV asyrdan bäri ulanylyp gelendigi çak edilýär.
                            <sup className="text-gray-400">[5]</sup> Ilki başda nol san hasaplanman, boş ýer hökmünde kabul edilipdir.
                            <sup className="text-gray-400">[6]</sup> Soňky çeşmelerde nol we otrisatel sanlary görkezmek düzgünleri girizilipdir.
                        </p>
                        <p>
                            Nol üçin tegelek nyşanyň <code className="px-1 py-0.5 rounded dark:bg-background">〇</code>
                            ilkinji ulanylyşy 1247-nji ýylda ýazylan <em>Toguz bölümdäki matematiki risala</em>-da bellige alnypdyr.
                            <sup className="text-gray-400">[7]</sup> Bu nyşanyň gelip çykyşy belli däl; belki, kwadrat nyşany üýtgetmek arkaly emele gelen
                            bolmagy mümkin
                            <sup className="text-gray-400">[8]</sup>. <strong>Suzhou sanlary</strong> — tayaç sanlarynyň dowamy bolup, häzirki wagtda hem käbir
                            söwda maksatly ulanylýar.
                        </p>
                    </section>

                    <section>
                        <h2>Esasy san sistemalary</h2>
                        <p>
                            Iň giňden ulanylýan san sistemi — onluk (decimal) sistemadyr. Onuň bütin görnüşini işläp taýýarlamakda hindi matematikaçylary uly
                            rol oýnapdyr, olar <strong>hindi–arap san sistemi</strong>ni döreden.
                            <sup className="text-gray-400">[8]</sup> V asyrda <strong>Aryabhata</strong>
                            ornuň bahasyny görkezýän ýazuwy döretdi, bir asyr soň <strong>Brahmagupta</strong> nol nyşanyny girizdi. Sistem söwda we harby
                            gatnaşyklar arkaly Arahaba ýaýrapdyr. Ýakyn Gündogar alymlary ony giňeldip, 10-nyň otrisatel derejelerini (bölek sanlary) hem goşdy.
                            Bu barada 952–953 ýyllarda siriýaly alym <strong>Abu-l-Hasan al-Uklidisi</strong> ýazypdyr.
                            <strong>Sind ibn Ali</strong> onluk nokat ýazuwyny girizip, arap sanlary hakda ilkinji risala ýazdy. Soň bu sistem söwdagärler
                            arkaly Ýewropa ýaýrap, ol ýerde “arap sanlary” diýlip atlandyryldy.
                        </p>
                        <p>
                            Iň ýönekeý sistema — birlik (unary) sistemasydyr. Bu ýerde her tebigy san degişli belginiň sany bilen görkezilýär. Mysal üçin, belgi{" "}
                            <code>/</code> bolsa, 7 sany /////// görnüşinde ýazylýar. San belgilere (tally marks) şeýle sistemanyň häzirki wagta çenli ulanylýan
                            mysalydyr. Birlik sistemasynyň peýdasy diňe kiçi sanlar üçin bar, ýöne nazary informatika üçin möhüm ähmiýete eýe.
                        </p>
                        <p>
                            Birlik ýazuwyny täze gymmatlyklar üçin aýratyn belgiler bilen gysgartyp bolar. Köplenç bu gymmatlyklar 10-njy güýçlerdir. Mysal
                            üçin, / — 1, − — 10, + — 100 bolsa, 304 sany +++ //// görnüşinde, 123 sany + − − /// görnüşinde ýazylýar. Bu usul{" "}
                            <em>belgi–bahasy ýazuwy</em> diýilýär. Gadymy Müsür san sistemi şu tipden bolupdyr, Rim sanlary bolsa onuň üýtgedilen görnüşidir.
                        </p>
                        <p>
                            Has amatly sistemalar hem bar, olar belgileriň gaýtalanmagyny ýörite gysgatmalar arkaly görkezýärler. Mysal üçin, ilkinji dokuz
                            harpy A — “bir gezek”, B — “iki gezek” hökmünde ulanyp, 304 sany C+ D/ görnüşinde ýazyp bolar. Şeýle sistema Hytaý we beýleki
                            Gündogar Aziýa sanlarynda ulanylýar. Iňlis dilindäki san sistemi hem şu tipe girýär (“three hundred four”).
                        </p>
                        <p>
                            Iň kämili — orunly (pozisiýon) sistemadyr. Sistemalar öz binýadyna görä klassifikasiýa edilýär. Onluk sistemada 0–9 arasy sanlar
                            ulanylýar we sanyň orny onuň haýsy 10-njy güýç bilen köpeldiljekdigini görkezýär: 304 = 3×100 + 0×10 + 4×1 = 3×10² + 0×10¹ + 4×10⁰.
                            Bu ýerde nol möhüm rol oýnaýar, sebäbi ol orunlary “geçmäge” mümkinçilik berýär.
                        </p>
                        <p>
                            Aritmetik amallar orunly sistemada has aňsat ýerine ýetirilýär. Goşmaça sistemalarda dürli belgiler gerek, emma orunly onluk
                            sistemada diňe 10 belgi ýeterlikdir.
                        </p>
                    </section>

                    <section>
                        <h2>Orunly sistemalaryň jikme-jigi</h2>
                        <p>
                            Orunly <em>b</em> esasly san sistemasynda (<em>b</em> — 1-den uly tebigy san, sistemasynyň esasy ýa-da radiksi diýilýär) ilkinji{" "}
                            <em>b</em> tebigy sana laýyk <em>b</em> nyşan (sifra) ulanylýar. Galan sanlar nyşanyň ýerleşişine bagly: iň sagdaky nyşan öz
                            bahasyna deň, çepe süýşdükçe bahasy <em>b</em>-e köpeldilýär.
                        </p>
                        <p>
                            Mysal üçin, <strong>onluk</strong> sistemada (esas 10) 4327 = (4×10³) + (3×10²) + (2×10¹) + (7×10⁰), bu ýerde 10⁰ = 1.
                        </p>
                        <p>
                            Umumy görnüşde san şeýle ýazylýar:
                            <br />
                            <code>aₙbⁿ + aₙ₋₁bⁿ⁻¹ + ... + a₀b⁰</code>, sifralar <code>aₙ aₙ₋₁ ... a₀</code> tertipde görkezilýär. Sifralar 0-dan <em>b – 1</em>
                            -e çenli bolýar.
                        </p>
                        <p>
                            Esaslar dürli bolsa, san esasy aşak indeksde görkezilýär:
                            <code>
                                san<sub>esas</sub>
                            </code>
                            . Indeks görkezilmese, san onluk diýip hasap edilýär.
                        </p>
                        <p>
                            Nokat arkaly bütin we bölek sanlary hem ýazyp bolýar. Mysal üçin, 2 esasly <code>10.11</code> = 2.75.
                        </p>
                        <p>
                            Umumy formula:
                            <Image src="/images/formula_n1.png" alt="f1" width={373} height={50} />
                        </p>
                        <p>
                            bᵏ we b⁻ᵏ sanlaryň <strong>aýlyk</strong> bahasydyr. Orun <em>k</em> — şol agramyň <strong>logaritmi</strong>. Iň ýokary orun sanyň{" "}
                            <strong>tartibine</strong> gabat gelýär.
                        </p>
                        <p>
                            Unary sistemada agram üçin <em>w</em> nyşan gerek bolardy. Orunly sistemada diňe{" "}
                            <code>
                                log<sub>b</sub>w + 1
                            </code>{" "}
                            sifra ýeterlik. Mysal üçin, 1000 üçin 4 sifra gerek, sebäbi log₁₀1000 + 1 = 4.
                        </p>
                        <p>Rasionallaryň ýazgysy ya soňlanýar, ya-da periodik bolýar. Irrasionallar bolsa ähli esaslarda çäksiz we gaýtalanmaz bolýar.</p>
                        <p>
                            Periodik sanlary görkezmek üçin üstünden çyzyk (
                            <code>
                                <span className="overline">n</span>
                            </code>
                            ) ýa-da nokat goýulýar. Mysal üçin: 14/11 = 1.27<span className="overline">27</span>...
                        </p>
                        <p>
                            Eger b = p prosta san bolsa, çepe tarap çäksiz dowam edýän <strong>p-adik sanlar</strong> kesgitlenýär.
                        </p>
                        <p>
                            Şeýle hem, sifralar oňyn ýa-da otrisatel bolup bilýän esas görnüşleri bar; bu <strong>belgili-rakam görkezilişi</strong> diýilýär.
                        </p>
                    </section>

                    <section>
                        <h2>Umumlaşdyrylan üýtgeýän uzynlykly bütin sanlar</h2>

                        <p>
                            Has umumy usul — garyşyk esasly ýazgy ulanylýar (<em>little-endian</em> görnüşinde). Mysal üçin: <code>a₀a₁a₂</code> ={" "}
                            <code>a₀ + a₁·b₁ + a₂·b₁·b₂</code>.
                        </p>

                        <p>
                            Bu <strong>Punycode</strong>’da ulanylýar. Onda dürli ululykdaky otrisatel däl bütin sanlaryň yzly-yzyna tertibi 36 nyşandan (
                            <code>a–z</code> we <code>0–9</code>) emele gelen “sifralar” arkaly ýazylýar. Olaryň bahalary 0–25 we 26–35 bolýar.
                        </p>

                        <p>
                            Şeýle hem her orun üçin kesgitlenen <code>t₀, t₁, ...</code> ýaly <em>çäk bahalary</em> bar. Eger <code>aᵢ</code> çäkden kiçi bolsa,
                            ol iň möhüm sifra bolýar. Bu bolsa sanyň tamamlandygyny görkezýär, indiki nyşan bolsa täze sanyň iň kiçi sfrasydyr.
                        </p>

                        <p>
                            Mysal üçin, ilkinji sifra üçin <code>b = 1</code> bolsa, <code>a = 0</code> sanyň soňudyr. Köp sanlylykda ilkinji sifra diňe 1–35
                            bolup biler. Şonda <code>b₁</code> = 35 bolýar. Umumy görnüş: <code>bₙ₊₁ = 36 − tₙ</code>.
                        </p>

                        <p>
                            Ikinji we üçünji sifer üçin çäk bahasy <code>c = 2</code> bolsa, onda ikinji sifra 0–1 ýa-da 2–35 bolup biler. Adatça (n+1)-nji
                            siferiň agramy öňküniň agramyna <code>36 − tₙ</code> köpeldilýär.
                        </p>

                        <p>
                            Mysal üçin:
                            <br />
                            <code>2-nji nyşanyň agramy = 36 − t₀ = 35</code>
                            <br />
                            <code>3-nji nyşanyň agramy = 35 × (36 − t₁) = 1190</code>
                        </p>

                        <p>
                            Şeýlelikde, iň köp 3 sanlylykda yzly-yzyna şeýle sanlar bolýar:
                            <br />
                            <code>a (0), ba (1), ca (2), ..., 99b (2450)</code>
                        </p>

                        <p>
                            Adaty n-esasly sistemadan tapawutlylykda, bu ýerde <code>9b</code> bar, 9 hem, b hem 35 manysyny berýär. Ýöne ýazgy ýeke-täkdir,
                            sebäbi <code>ac</code> ýa-da <code>aca</code> kabul edilmeýär.
                        </p>

                        <p>Çäk bahalaryny saýlamak mümkinçiligi dürli ululykdaky sanlaryň ýygylygynyň hasaplanmagyna görä optimizasiýa berýär.</p>

                        <p>
                            Hemme çäk bahalary 1 deň bolsa, bu <strong>bijektiw sistemany</strong> aňladýar, nollar aýyryjy hökmünde hyzmat edýär.
                        </p>

                        <div className="float-right">© wikipedia, 2025</div>
                        <br />
                    </section>

                    <hr />
                    <h2>Edebiýatlar</h2>
                    <ol>
                        <li>
                            O'Connor, J. J. we Robertson, E. F. <em>Arabic Numerals</em> (Arap sanlary). Ýanwar 2001.
                        </li>
                        <li>
                            Bill Casselman. "All for Nought" (Hemmesi boşuna). <em>Feature Column</em>. AMS. Fewral 2007.
                        </li>
                        <li>
                            Bradley, Jeremy. "How Arabic Numbers Were Invented" (Arap sanlary nähili oýlanyp tapyldy). <em>theclassroom.com</em>.
                        </li>
                        <li>
                            "Wissanu rejects dumping Thai numerals" (Wissanu Taý sanlaryny ýatyrmakdan ýüz öwürdi). <em>Bangkok Post</em>. 31 Maý 2022.
                        </li>
                        <li>O'Connor, John J.; Robertson, Edmund F. (2004). "Chinese numerals" (Hytaý sanlary). University of St Andrews.</li>
                        <li>
                            Shen Kuo we beýlekiler (1999). <em>The Nine Chapters on the Mathematical Art</em> (Matematiki sungatyň dokuz baplary). Oxford
                            University Press.
                        </li>
                        <li>
                            "Mathematics in the Near and Far East" (Ýakyn we Uzak Gündogarda matematika). <em>grmath4.phpnet.us</em>.
                        </li>
                        <li>
                            Martzloff, Jean-Claude (2007). <em>A History of Chinese Mathematics</em> (Hytaý matematikasynyň taryhy).
                        </li>
                        <li>
                            David Eugene Smith; Louis Charles Karpinski (1911). <em>The Hindu–Arabic numerals</em> (Hindi–arap sanlary).
                        </li>
                        <li>
                            Chowdhury, Arnab. <em>Design of an Efficient Multiplier using DBNS</em> (DBNS esasynda netijeli köpeltgiçi döretmek). GIAP Journals.
                        </li>
                        <li>
                            Fiete, I. R.; Seung, H. S. (2007). "Neural network models of birdsong..." (Guşlaryň aýdymy boýunça neýron tor modelleri...){" "}
                            <em>New Encyclopedia of Neuroscience</em> (Täze Neýroýörelge ensiklopediýasynda).
                        </li>
                    </ol>

                    <h2>Çeşmeler</h2>
                    <ul>
                        <li>
                            Georges Ifrah. <em>The Universal History of Numbers</em> (Sanlaryň umumy taryhy). Wiley, 1999.
                        </li>
                        <li>
                            D. Knuth. <em>The Art of Computer Programming</em> (Kompýuter programmirlemegiň sungaty). Addison–Wesley, 3-nji neşir.
                        </li>
                        <li>
                            A.L. Kroeber. <em>Handbook of the Indians of California</em> (Kaliforniýa hindularynyň gollanmasy). Smithsonian Institution.
                        </li>
                        <li>
                            J.P. Mallory; D.Q. Adams. <em>Encyclopedia of Indo-European Culture</em> (Indo–Ýewropa medeniýeti ensiklopediýasy).
                        </li>
                        <li>
                            Hans J. Nissen we beýlekiler (1993). <em>Archaic Bookkeeping</em> (Arhaik buhgalteriýa). University of Chicago Press.
                        </li>
                        <li>
                            Schmandt-Besserat, Denise (1996). <em>How Writing Came About</em> (Ýazuw nähili emele geldi). University of Texas Press.
                        </li>
                        <li>
                            Zaslavsky, Claudia (1999). <em>Africa Counts</em> (Afrika sanap çykýar). Chicago Review Press.
                        </li>
                    </ul>
                </Container>
            </article>
        </main>
    );
};

export default NumeralSystem;
