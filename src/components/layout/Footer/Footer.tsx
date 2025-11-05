import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-foreground h-[500px] max-sm:h-full max-sm:pb-5">
      <div className="pt-21 max-md:pt-10 flex max-md:flex-col justify-between items-baseline px-23.5 max-sm:px-10">
        <div className="flex items-baseline">
          <Link
            href="/"
            className="flex items-center relative w-[278] h-[62px]"
          >
            <Image
              src="/logo.svg"
              alt="Company logo"
              fill
              priority
              className="h-auto w-[150px] md:w-[190px] lg:w-[230px]"
            />
          </Link>
        </div>
        <div className="flex max-sm:flex-col font-inter self-start text-sm max-md:pt-5 max-sm:gap-5">
          <ul className="flex flex-col gap-3 pr-10">
            <li>
              <p className="font-bold text-blue-500 text-lg">Mailbox</p>
              <p>
                401 Hawthorne Lane Suite 110 <br />
                Charlotte, NC 28204 <br />
                Mailbox # 114
              </p>
            </li>
            <li>
              <p className="font-bold text-blue-500 text-lg">Email</p>
              <Link
                href="mailto:info@terratechsolutions.net"
                aria-label="mail to"
              >
                info@terratechsolutions.net
              </Link>
            </li>
            <li>
              <p className="font-bold text-blue-500 text-lg">Inquiries:</p>
              <Link href="+19803106340" aria-label="Inquiries">
                +1 980-310-6340
              </Link>
            </li>
            <li>
              <ul>
                <li className="font-bold text-blue-500 text-lg">Socials</li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/TerraTechsolut/"
                    aria-label="Facebook"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/terratechsol/#"
                    aria-label="Instagram"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/terratech-sol"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="list-none flex flex-col gap-5">
            <li className="font-bold text-blue-500 text-lg">Home</li>
            <li>
              <Link href="/Sinkholes">Sinkholes</Link>
            </li>
            <li>
              <Link href="/StormwaterInfrastructure">
                Stormwater infrastructure
              </Link>
            </li>
            <li>
              <Link href="/RoadwayRepair">Roadway Repair</Link>
            </li>
            <li>
              <Link href="/StructuralStabilization">
                Structural Stabilization
              </Link>
            </li>
            <li>
              <Link href="/SlopeStabilization">Slope Stabilization</Link>
            </li>
            <li>
              <Link href="/scanningAndDetection">
                3d scanning and detection
              </Link>
            </li>
            <li>
              <Link href="/About Us">About Us</Link>
            </li>
            <li>
              <Link href="/Contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
