const input = document.getElementById('nameInput');
const result = document.getElementById('result');
const btn = document.getElementById('showBtn');

btn.addEventListener('click', function() {
  const ten = input.value.trim();
  if (ten === "") {
    result.textContent = "Vui lòng nhập tên trước đã!";
  } else {
    result.textContent = `Xin chào ${ten}!`;
  }
});
