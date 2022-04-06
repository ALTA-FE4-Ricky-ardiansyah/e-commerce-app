import React from "react";

export default function MenuComponent() {
  return (
    <div className="flex">
      <div className=" justify-center">
        <div className="mt-10 text-center">
          <h1 className="text-5xl font-semibold font-sans">Shop By Category</h1>
          <p className="m-2">visit our shop to see amazing product</p>
          <div className="flex-auto">
            <div className="bg-center bg-neutral-800 w-40 h-1 rounded"></div>
          </div>
          <div class="flex flex-row mt-5">
            <div class="basis-1/5">Books</div>
            <div class="basis-1/5">Computer</div>
            <div class="basis-1/5">Kitchen</div>
            <div class="basis-1/5">Gadget</div>
            <div class="basis-1/5">Style</div>
          </div>
        </div>
      </div>
    </div>
  );
}
