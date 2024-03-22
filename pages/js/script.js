const addItem = document.querySelector(".add-item");
const itemDetails = document.querySelector(".item-details");
const itemDetailsWrapper = document.querySelector(".item-wrapper");
let close = document.querySelectorAll(".close");
let item = 1

addItem.addEventListener("click", (event) => {
  item++
  itemDetailsWrapper.innerHTML += `
  <div class="invoice-inputs row row mt-4 item${item}" data-item="${item}">
  <div class="names col-12 row">
    <p class="col-6">Item</p>
    <p class="col-2">Cost</p>
    <p class="col-2">Qty</p>
    <p class="col-1 ml-3">Price</p>
  </div>
  <div class="inputs pt-3 col-12">
    <div class="item-details">
      <div class="item-select">
        <select class="py-2 px-1 outline-0">
          <option value="option 1">App Customization</option>
          <option value="option 2">option 2</option>
          <option value="option 3">option 3</option>
          <option value="option 4">option 4</option>
        </select>
        <textarea class="unie my-2 p-2 outline-0">
The most developer friendly & highly customizable HTML5 Admin</textarea
        >
      </div>
      <div class="price-qty">
        <div class="">
          <input
            class="py-2 px-1 outline-0 border rounded mb-2"
            type="number"
            value="24"
          />
          <p>Discount: 0% 0% 0%</p>
        </div>
        <div class="">
          <input
            class="py-2 px-1 outline-0 border rounded"
            type="number"
            value="24"
          />
        </div>
        <div class="mt-3 ml-4
         mt-lg-0 text-left text-lg-center">
          <h5>$24</h5>
        </div>
      </div>
    </div>
    <div class="close" data-item="${item}"><img src="./../dist/img/close.png" alt=""></div>
  </div>
</div>
  `;

});
