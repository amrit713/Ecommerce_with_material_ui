import React from "react";
import New from "./New";

const items = [
  {
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "new arravials",
    subtitle: "new latest watch ",
    off: "collection",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2020/05/26/09/32/product-5222398_960_720.jpg",
    title: "best seller",
    subtitle: "trending glass",
    off: "sunglasses",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "new arravials",
    subtitle: "Headphone sale ",
    off: "up to 30%",
  },
];

export default function NewAvaliable() {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 md:space-x-6" >
      {items.map((item: any, i: number): any => (
        
        <New
          key={i}
          subtitle={item.subtitle}
          off={item.off}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
}
