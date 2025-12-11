let sanPham = [
  { ten: "Bút bi", gia: 5000, soLuong: 10 },
  { ten: "Vở", gia: 15000, soLuong: 5 },
  { ten: "Thước kẻ", gia: 8000, soLuong: 8 },
  { ten: "Tẩy", gia: 3000, soLuong: 15 }
];



// a) Hiển thị tên và giá của tất cả sản phẩm
function hienThiSanPham(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].ten + " - " + arr[i].gia + "đ");
  }
}

hienThiSanPham(sanPham);

// b) Tính tổng giá trị kho hàng (giá × số lượng)
function tinhTongGiaTri(arr) {
  let tong = 0;
  for (let i = 0; i < arr.length; i++) {
    tong = tong + arr[i].gia * arr[i].soLuong;
  }
  return tong;
}

console.log(tinhTongGiaTri(sanPham));

// c) Tìm sản phẩm có giá <= giá tối đa
function timSanPhamRe(arr, giaToiDa) {
  let kq = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].gia <= giaToiDa) {
      kq.push(arr[i]);
    }
  }
  return kq;
}

console.log(timSanPhamRe(sanPham, 8000));

// d) Cập nhật số lượng sản phẩm theo tên
function capNhatSoLuong(arr, tenSP, soLuongMoi) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].ten == tenSP) {
      arr[i].soLuong = soLuongMoi;
    }
  }
}

capNhatSoLuong(sanPham, "Vở", 20);
console.log(sanPham);
