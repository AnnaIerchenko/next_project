import { Container, Filters, ProductsGroupList, Title, TopBar } from "@/components/shared";


export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text='All Pizzas' size='lg' className='font-extrabold'/>
      </Container> 
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* filter */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* list of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList title="Pizzas" items={[
                {
                  id: 1,
                  name: "Cheesburger Pizza",
                  imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610D2925109AB2E1C92CC5383C.avif",
                  price: 10,
                  items: [{ price: 15}],
                },
                {
                  id: 2,
                  name: "Cheesburger Pizza",
                  imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610D2925109AB2E1C92CC5383C.avif",
                  price: 10,
                  items: [{ price: 15}],
                },
                {
                  id: 3,
                  name: "Cheesburger Pizza",
                  imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610D2925109AB2E1C92CC5383C.avif",
                  price: 10,
                  items: [{ price: 15}],
                },
                {
                  id: 4,
                  name: "Cheesburger Pizza",
                  imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610D2925109AB2E1C92CC5383C.avif",
                  price: 10,
                  items: [{ price: 15}],
                },
                {
                  id: 5,
                  name: "Cheesburger Pizza",
                  imageUrl: "https://media.dodostatic.net/image/r:233x233/11EE7D610D2925109AB2E1C92CC5383C.avif",
                  price: 10,
                  items: [{ price: 15}],
                },
                ]} 
                categoryId={1}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
