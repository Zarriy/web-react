import Button from "../components/button";

const services = [
  {
    src: "https://images.pexels.com/photos/8438701/pexels-photo-8438701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 12.46,
    altText: "SEO Page",
  },
  {
    src: "https://images.pexels.com/photos/8438701/pexels-photo-8438701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 22.58,
    altText: "SEO Services",
  },
  {
    src: "https://images.pexels.com/photos/8438701/pexels-photo-8438701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: 8.98,
    altText: "SEO Servcies",
  },
];

function Shop() {
  return (
    <div className="text-white text-center mb-28" id="shop">
      <h2 className="text-4xl font-medium mb-16 h2-fontFamily">Shop</h2>
      <div className="flex justify-center gap-x-6">
        {services.map((data) => {
          return (
            <div className="h-72 w-64 bg-emerald-100 ">
              <img src={data.src} alt={data.altText} />

              <Button text="Order Now" classes="relative bottom-10 -left-16" />
              <h3 className="relative bottom-24 -left-20">$ {data.price}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shop;
