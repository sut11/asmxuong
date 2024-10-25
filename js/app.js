import { truyenchu_arr, truyenhinh_arr } from './data.js';
const hien1quyenchu = (truyenchu) => {
    return `<div>
    <img src="${truyenchu.hinh}">
    <h4> Tên truyện: ${truyenchu.ten}</h4> 
    <p> Tác giả: ${truyenchu.tacgia}</p> 
    <p> Thể loại: ${truyenchu.theloai}</p> 
    <p> Giá: ${truyenchu.gia}</p> 
    </div>`;
};
export const showlisttruyenchu = () => {
    const html_arr = truyenchu_arr.map(hien1quyenchu);
    return html_arr.join("");
};
const hien1quyenhinh = (truyenhinh) => {
    return `<div>
    <img src="${truyenhinh.hinh}">
    <h4> Tên truyện: ${truyenhinh.ten}</h4> 
    <p> Tác giả: ${truyenhinh.tacgia}</p> 
    <p> Thể loại: ${truyenhinh.theloai}</p> 
    <p> Giá: ${truyenhinh.gia}</p> 
    </div>`;
};
export const showlisttruyenhinh = () => {
    const html_arr = truyenhinh_arr.map(hien1quyenhinh);
    return html_arr.join("");
};
const show1tacgia = (tg) => {
    return `
    <div><h2>${tg.ten}</h2>
    <img src="${tg.hinh}" alt="${tg.ten}">
    </div>`;
};
export const showlisttacgia = async () => {
    let tacgia_arr = await fetch("http://localhost:3000/tacgia")
        .then(res => res.json())
        .then(data => { return data; });
    let str = ``;
    tacgia_arr.forEach(tg => str += show1tacgia(tg));
    return str;
};
