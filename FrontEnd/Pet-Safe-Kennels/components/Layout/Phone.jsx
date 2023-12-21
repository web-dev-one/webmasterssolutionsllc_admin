const number = "520.730.7020"

export default function Phone() {
  return (
    <div
      className="flex justify-center py-2"
      style={{ backgroundColor: "#DACCBA", color: "#4D4949" }}
    >
      <picture>
        <source type="image/webp" srcSet="phone.webp" />
        <source type="image/png" srcSet="phone.png" />
        <img src="/phone.png" alt="Phone" className="w-6 h-6 mr-2" />
      </picture>
      <a href={`tel:${number}`} >
        <span className="font-bold">Call us</span> {number}
      </a>
    </div>
  );
}
