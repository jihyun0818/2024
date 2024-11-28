// 장바구니 데이터, 객체
const cart = {};

// HTML 요소 참조
const menu = document.querySelector("#menu");
const cartDisplay = document.querySelector("#cart");
const totalDisplay = document.querySelector("#total");

// 메뉴 버튼 클릭 이벤트 추가
menu.addEventListener("click", (event) => {
  const targetButton = event.target.closest("button");
  if (targetButton) {
    const name = targetButton.getAttribute("data-name");
    const price = targetButton.getAttribute("data-price");

    if (cart[name]) {
      cart[name].count++;
    } else {
      cart[name] = { price: Number(price), count: 1 };
    }

    // UI 업데이트
    updateCart();
  }
});

// 장바구니와 총액 업데이트
function updateCart() {
  cartDisplay.innerHTML = ""; // 기존 장바구니 표시 초기화
  let total = 0; // 총액 초기화

  for (const name in cart) {
    const { price, count } = cart[name];
    total += price * count;

    // 장바구니 항목 생성
    const item = document.createElement("div");
    item.className = "cart-item";

    // 상품 이름과 수량 표시
    const itemName = document.createElement("span");
    itemName.textContent = `${name} (${(price * count).toLocaleString()}억)`;

    // 수량 조절 버튼
    const increaseBtn = document.createElement("button");
    increaseBtn.textContent = "+";
    increaseBtn.addEventListener("click", () => {
      cart[name].count++;
      updateCart();
    });

    const decreaseBtn = document.createElement("button");
    decreaseBtn.textContent = "-";
    decreaseBtn.addEventListener("click", () => {
      if (cart[name].count > 1) {
        cart[name].count--;
      } else {
        delete cart[name];
      }
      updateCart();
    });

    // 삭제 버튼
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", () => {
      delete cart[name];
      updateCart();
    });

    // 항목 추가
    item.appendChild(itemName);
    item.appendChild(increaseBtn);
    item.appendChild(decreaseBtn);
    item.appendChild(deleteBtn);
    cartDisplay.appendChild(item);
  }

  // 총 금액 표시
  totalDisplay.textContent = total.toLocaleString();
}
