type TTruyenchu = {id:number; ten:string; tacgia:string; theloai:string;gia:string;hinh:string}
type TTruyenhinh = {id:number; ten:string; tacgia:string; theloai:string;gia:string;hinh:string}
const truyenchu_arr:TTruyenchu[]=[
    {id:1,ten:"Thế giới hoàn mỹ",tacgia:"Thần đông",theloai:"Kiếm hiệp, tiên hiệp",gia:"100.000",hinh:"/image/the-gioi-hoan-my.jpg"},
    {id:2,ten:"Già thiên",tacgia:"Thần đông",theloai:"Tiên hiệp, dị giới",gia:"120.000",hinh:"/image/images.jpg"},
    {id:3,ten:"Nhất niệm vĩnh hằng",tacgia:"Nhĩ căn",theloai:"Tiên hiệp, dị giới",gia:"170.000",hinh:"/image/images (1).jpg"},
    {id:4,ten:"Vũ động càn khôn",tacgia:"Thần tằm thổ đậu",theloai:"tiên hiệp",gia:"150.000",hinh:"/image/830483f9953bd100219247fe4e19accd.jpg"}
]
const truyenhinh_arr:TTruyenhinh[]=[
    {id:1,ten:"One Piece",tacgia:"Eiichiro Oda",theloai:"Hải tặc, siêu năng lực",gia:"90.000",hinh:"/image/One_Piece,_Volume_61_Cover_(Japanese).jpg"},
    {id:2,ten:"Death Note",tacgia:"Tsugumi Ohba",theloai:"Tâm lí, siêu nhiên",gia:"110.000",hinh:"/image/deathnote.jpg"},
    {id:3,ten:"Conan",tacgia:"Gosho Aoyama",theloai:"Trinh thám",gia:"132.000",hinh:"image/conan.webp"},
    {id:4,ten:"Kimetsu no Yaiba ",tacgia:"Koyoharu Gotouge",theloai:"Kì ảo phiêu lưu",gia:"160.000",hinh:"image/z96eha0f_660x946-demonslayer.jpg"}
]
export{ TTruyenchu,TTruyenhinh}
export{truyenchu_arr,truyenhinh_arr}