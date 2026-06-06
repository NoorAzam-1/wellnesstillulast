import Image from "next/image";

const items = [
  {
    title: "Ashwagandha",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAe4a2cX-ZqDHzlb0sL8lPJRy1HAoW9NYN7CcA-vpK0HGM1ju0D0ANPsnc4l3KQbYjBOC_sShpcc-cx_oa7OV33pLnPb4jgDFA6GDP_n1UL2lL_hZQzY93hWw2Q0wVlQBLoFlbpNxhZr0j68sB6fCm3FwxQUtiXfntWnvXnqssX-HBBNbMuUELRBileKRfudXdHLEGhiDF0TteRt2e8NnGFnfvEVocX0yH5iVsPwggroc34k23POCkPZmh31Kl5Sf0PozOS2XaSwZU",
  },
  {
    title: "Tulsi",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUcMZgShuk96z4EOj0xVapXngSQY3MIY1fW-__HTD3AHJ9zloWwR_Ds6RopF-U9Ss23Zuln30BA4WYRhYOrMqgyB6dWhCWehfcYqDGUpjmkzzmUgGvxDytieGJdSpFe3kJcPk_IWqFj3_zdUERqOKbmjRfWN9OITvseoI7sITC2xxYMzgTkNMDNgREc2L1uQa_RtKyVevb3Yzl0APgHNgjvd4lMBzx6YEBsHQLG68NHYpOXATIHKJoCKK9Zmrg4hkfTjfalm8PkwE",
  },
  {
    title: "Turmeric",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8iMzddVmx3uM_3hSlOVkcQ1UQ67qEOAj_8C5Lmz89NpN_D5DjktNu8NKqz3FO1TLufSdzJI4xMd5ExuFrluU8r2HgFlp0v5X2eCo1np8WBPAiiCxcG3o0SPbFLQLfLqcbySI9dlgVd52tYROdnLRcCg5-8tzuy1z19HglJVI1NOGugeiCAdrxtfmxvo1IM9VM441HJAoH1gACfSrElG-IXBUgBG0p2eT49u5JoLp4PQQ9S_vqO0D6G4LaTWW0v5O9jkZeJaXhWYo",
  },
  {
    title: "Neem",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrGfxG44u3iqzVNa67TVBVAlWdwSA5mVCf8OUFKmR4zj6nDX6Qy8aLn91A8hInNFUg1coUQLPxjCoXO2sD8FMIVt5PXT59oOoOviwCGPhv3kvKZbi7NFGVFupcfjR1pqYKj1nMhRlUYg5y2z44B7aVHXCrsXoAVVG7rCKaREj1tUaBQjZXClcWcsF8lKxpiXln7uL3XW2JGf4jS36hRbpxrYmiYtDm1PALqvbZLXaz8XYVMryrfVAbSRBkBHPrNvmwqY-AhJg06e8",
  },
];

export default function IngredientsSection() {
  return (
    <section className="py-14 bg-[#012317] text-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-20">
          Soul of the Earth
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-16">
          {items.map((item) => (
            <div key={item.title} className="text-center hover:scale-110 animation duration-500">
              <Image
                src={item.img}
                alt="image"
                height={200}
                width={200}
                className="w-40 h-40 rounded-full border-2 border-[#fcca66]"
              />

              <h3 className="mt-6 text-2xl">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
