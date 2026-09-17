export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: Category;
  shortDesc: string;
  description: string;
  price: string;
  image: string;
  alt: string;
  gallery?: { src: string; alt: string }[];
  specs: Spec[];
  featured?: boolean;
};

export const categories = [
  "Phụ tùng vận thăng",
  "Phụ tùng cẩu tháp",
  "Thiết bị điều khiển",
  "Thiết bị xây dựng",
] as const;

export type Category = (typeof categories)[number];

const img = (slug: string) => `/images/products/${slug}.webp`;

export const products: Product[] = [
  {
    slug: "banh-nhong-van-thang-long",
    name: "Bánh nhông vận thăng lồng M8Z15",
    category: "Phụ tùng vận thăng",

    shortDesc:
      "Bánh nhông vận thăng lồng M8Z15, Modul M8, 15 răng, dùng cho hệ thống truyền động vận thăng lồng ANKA và GJJ.",

    description:
      "Bánh nhông vận thăng lồng M8Z15 là phụ tùng dùng trong hệ thống truyền động của vận thăng lồng ANKA và GJJ. Sản phẩm có Modul M = 8 và số răng Z = 15, được sử dụng để truyền lực trong hệ thống cơ khí của thiết bị nâng hạ. Phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa vận thăng lồng tại công trình.",

    price: "Liên hệ báo giá",

    image: img("banh-nhong-van-thang-long"),

    alt: "Bánh nhông vận thăng lồng M8Z15 ANKA GJJ",

    featured: true,

    specs: [
      {
        label: "Mã sản phẩm",
        value: "M8Z15",
      },
      {
        label: "Loại thiết bị",
        value: "Vận thăng lồng",
      },
      {
        label: "Tương thích",
        value: "ANKA, GJJ",
      },
      {
        label: "Modul",
        value: "M = 8",
      },
      {
        label: "Số răng",
        value: "Z = 15 răng",
      },
      {
        label: "Ứng dụng",
        value: "Hệ thống truyền động vận thăng lồng",
      },
    ],
  },

  {
    slug: "banh-nhong-van-thang",
    name: "Bánh nhông vận thăng Alimak",
    category: "Phụ tùng vận thăng",

    shortDesc:
      "Bánh nhông vận thăng Alimak Sweden, Modul M5, 23 răng, dùng trong hệ thống truyền động vận thăng.",

    description:
      "Bánh nhông vận thăng Alimak Sweden là phụ tùng quan trọng trong hệ thống truyền động của vận thăng Alimak. Sản phẩm có Modul M = 5 và số răng Z = 23, được thiết kế để truyền động lực và hỗ trợ chuyển động của vận thăng trong quá trình vận hành. Phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa thiết bị.",

    price: "Liên hệ báo giá",

    image: img("banh-nhong-van-thang"),

    alt: "Bánh nhông vận thăng Alimak Sweden M5 Z23",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Alimak Sweden",
      },
      {
        label: "Ứng dụng",
        value: "Vận thăng Alimak",
      },
      {
        label: "Modul",
        value: "M = 5",
      },
      {
        label: "Số răng",
        value: "Z = 23 răng",
      },
      {
        label: "Loại",
        value: "Bánh nhông truyền động",
      },
      {
        label: "Chức năng",
        value: "Truyền động và điều khiển chuyển động",
      },
    ],
  },

  {
    slug: "cum-thang-xoay",
    name: "Cụm thắng xoay vận thăng",
    category: "Phụ tùng vận thăng",

    shortDesc:
      "Cụm thắng xoay vận thăng dùng cho hệ thống phanh và truyền động, hỗ trợ thay thế và bảo trì thiết bị tại công trình.",

    description:
      "Cụm thắng xoay vận thăng là cụm phụ tùng phục vụ hệ thống phanh và truyền động của thiết bị nâng hạ. Sản phẩm được cung cấp theo mẫu và thông số thực tế của vận thăng, phù hợp cho nhu cầu thay thế, sửa chữa và bảo trì thiết bị tại công trình.",

    price: "Liên hệ báo giá",

    image: img("cum-thang-xoay"),

    alt: "Cụm thắng xoay vận thăng",

    featured: true,

    specs: [
      {
        label: "Loại",
        value: "Cụm thắng xoay",
      },
      {
        label: "Ứng dụng",
        value: "Vận thăng xây dựng",
      },
      {
        label: "Chức năng",
        value: "Phanh và hỗ trợ truyền động",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và thông số thiết bị",
      },
      {
        label: "Cung cấp",
        value: "Tư vấn theo thiết bị thực tế",
      },
    ],
  },

  {
    slug: "ac-than-cau-phi-55",
    name: "Ắc than cẩu Ø55",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Ắc than cẩu Ø55 dùng cho các vị trí liên kết và chịu tải của cẩu tháp, cung cấp theo nhu cầu thay thế tại công trình.",

    description:
      "Ắc than cẩu Ø55 là chi tiết phụ tùng dùng cho các vị trí liên kết và chịu tải trong hệ thống cẩu tháp. Sản phẩm có đường kính Ø55 mm, phù hợp cho nhu cầu thay thế chi tiết tại công trình. Việc lựa chọn ắc cần căn cứ vào mẫu, kích thước và thông số thực tế của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("ac-than-cau-phi-55"),

    alt: "Ắc than cẩu Ø55 phụ tùng cẩu tháp",

    featured: true,

    specs: [
      {
        label: "Đường kính",
        value: "Ø55 mm",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Liên kết và chịu tải",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu thiết bị",
      },
    ],
  },

  {
    slug: "con-lan-xe-con-cau-thap",
    name: "Con lăn xe con cẩu tháp Potain",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Con lăn xe con cẩu tháp Potain dùng cho cơ cấu di chuyển xe con trên cần, cung cấp theo mẫu và kích thước thực tế.",

    description:
      "Con lăn xe con cẩu tháp Potain là phụ tùng dùng trong cơ cấu di chuyển xe con trên cần cẩu tháp. Sản phẩm được cung cấp theo mẫu và kích thước thực tế của thiết bị, phù hợp cho nhu cầu thay thế và bảo trì trong quá trình vận hành cẩu tháp.",

    price: "Liên hệ báo giá",

    image: img("con-lan-xe-con-cau-thap"),

    alt: "Con lăn xe con cẩu tháp Potain",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Potain",
      },
      {
        label: "Ứng dụng",
        value: "Xe con cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Di chuyển xe con trên cần",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và kích thước thiết bị",
      },
      {
        label: "Cung cấp",
        value: "Theo mẫu thực tế",
      },
    ],
  },

  {
    slug: "ban-dieu-khien-van-thang",
    name: "Bàn điều khiển vận thăng",
    category: "Thiết bị điều khiển",

    shortDesc:
      "Bàn điều khiển vận thăng phục vụ vận hành nâng hạ, bố trí nút điều khiển và dừng khẩn phù hợp cho công trường.",

    description:
      "Bàn điều khiển vận thăng là bộ phận phục vụ vận hành nâng hạ của thiết bị tại công trường. Sản phẩm được bố trí các chức năng điều khiển cần thiết, hỗ trợ thao tác vận hành và dừng thiết bị khi cần thiết. Có thể cung cấp theo mẫu và thông số thực tế của vận thăng.",

    price: "Liên hệ báo giá",

    image: img("ban-dieu-khien-van-thang"),

    alt: "Bàn điều khiển vận thăng",

    featured: true,

    specs: [
      {
        label: "Ứng dụng",
        value: "Vận thăng xây dựng",
      },
      {
        label: "Chức năng",
        value: "Điều khiển vận hành nâng hạ",
      },
      {
        label: "Điều khiển",
        value: "Theo cấu hình thiết bị",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và thông số vận thăng",
      },
      {
        label: "Cung cấp",
        value: "Tư vấn theo thiết bị thực tế",
      },
    ],
  },

  {
    slug: "bullong-tong-hop",
    name: "Bu lông tổng hợp khung cẩu tháp Potain",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Bu lông tổng hợp dùng cho các vị trí liên kết khung cẩu tháp Potain, cung cấp theo bộ hoặc theo mẫu thực tế.",

    description:
      "Bu lông tổng hợp khung cẩu tháp Potain là nhóm chi tiết liên kết phục vụ lắp dựng và bảo trì cẩu tháp. Sản phẩm được cung cấp theo bộ hoặc theo mẫu, giúp thay thế các chi tiết liên kết phù hợp với kết cấu và thông số thực tế của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("bullong-tong-hop"),

    alt: "Bu lông tổng hợp khung cẩu tháp Potain",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Potain",
      },
      {
        label: "Ứng dụng",
        value: "Khung cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Liên kết kết cấu",
      },
      {
        label: "Cung cấp",
        value: "Theo bộ hoặc từng chi tiết",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và thông số thiết bị",
      },
    ],
  },

  {
    slug: "pulley-cau-thap",
    name: "Pulley cẩu tháp MC nylon 350×90",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Pulley cẩu tháp MC nylon kích thước 350×90 mm, dùng cho cụm dẫn hướng cáp và các vị trí thay thế phù hợp.",

    description:
      "Pulley cẩu tháp MC nylon 350×90 mm là puly dùng trong các cụm dẫn hướng và vận hành cáp của cẩu tháp. Sản phẩm có kích thước 350×90 mm, vật liệu MC nylon theo mẫu sản phẩm, phù hợp cho nhu cầu thay thế và bảo trì thiết bị.",

    price: "Liên hệ báo giá",

    image: img("pulley-cau-thap"),

    alt: "Pulley cẩu tháp MC nylon 350x90 mm",

    featured: true,

    specs: [
      {
        label: "Kích thước",
        value: "350 × 90 mm",
      },
      {
        label: "Vật liệu",
        value: "MC Nylon",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Dẫn hướng cáp",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu thiết bị",
      },
    ],
  },

  {
    slug: "pulley-moment",
    name: "Pulley moment cẩu tháp",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Pulley moment cẩu tháp dùng trong hệ thống giới hạn mô-men tải, hỗ trợ kiểm soát và bảo vệ thiết bị khi vận hành.",

    description:
      "Pulley moment cẩu tháp là cụm phụ tùng liên quan đến hệ thống giới hạn mô-men tải của cẩu tháp. Cụm puly và công tắc giới hạn hỗ trợ kiểm soát trạng thái tải trong quá trình vận hành, góp phần bảo vệ thiết bị. Sản phẩm được cung cấp theo mẫu và thông số thực tế.",

    price: "Liên hệ báo giá",

    image: img("pulley-moment"),

    alt: "Pulley moment giới hạn mô men cẩu tháp",

    featured: true,

    specs: [
      {
        label: "Ứng dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Giới hạn mô-men tải",
      },
      {
        label: "Cấu tạo",
        value: "Puly và công tắc giới hạn",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu thiết bị",
      },
      {
        label: "Bảo trì",
        value: "Kiểm tra và thay thế theo tình trạng thiết bị",
      },
    ],
  },

  {
    slug: "phieu-do-be-tong",
    name: "Phễu đổ bê tông 0.9 m³",
    category: "Thiết bị xây dựng",

    shortDesc:
      "Phễu đổ bê tông dung tích 0.9 m³ dùng để vận chuyển và đổ bê tông tại công trường, phù hợp phối hợp với cẩu tháp.",

    description:
      "Phễu đổ bê tông 0.9 m³ là thiết bị phục vụ vận chuyển và đổ bê tông tại công trường. Với dung tích 0.9 m³, phễu có thể phối hợp với cẩu tháp để đưa bê tông đến vị trí thi công. Sản phẩm phù hợp cho nhu cầu sử dụng trong các công trình xây dựng.",

    price: "Liên hệ báo giá",

    image: img("phieu-do-be-tong"),

    alt: "Phễu đổ bê tông dung tích 0.9 m3",

    featured: true,

    specs: [
      {
        label: "Dung tích",
        value: "0.9 m³",
      },
      {
        label: "Ứng dụng",
        value: "Công trình xây dựng",
      },
      {
        label: "Chức năng",
        value: "Vận chuyển và đổ bê tông",
      },
      {
        label: "Thiết bị phối hợp",
        value: "Cẩu tháp",
      },
      {
        label: "Cung cấp",
        value: "Theo nhu cầu công trình",
      },
    ],
  },

  {
    slug: "xuong-vat-tu",
    name: "Xuồng vật tư cẩu tháp 1.5 m³",
    category: "Thiết bị xây dựng",

    shortDesc:
      "Xuồng vật tư cẩu tháp dung tích 1.5 m³, dùng để vận chuyển vật tư phục vụ thi công và phù hợp cho nhu cầu công trình.",

    description:
      "Xuồng vật tư cẩu tháp 1.5 m³ là thiết bị phục vụ vận chuyển vật tư trong công trình xây dựng bằng cẩu tháp. Sản phẩm có dung tích 1.5 m³ và được sử dụng theo nhu cầu thực tế của công trường. Khách hàng có thể cung cấp mẫu hoặc thông số thiết bị để được tư vấn loại phù hợp.",

    price: "Liên hệ báo giá",

    image: img("xuong-vat-tu"),

    alt: "Xuồng vật tư cẩu tháp dung tích 1.5 m3",

    featured: true,

    specs: [
      {
        label: "Dung tích",
        value: "1.5 m³",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp và công trình xây dựng",
      },
      {
        label: "Chức năng",
        value: "Vận chuyển vật tư",
      },
      {
        label: "Thiết bị sử dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Cung cấp",
        value: "Theo nhu cầu và mẫu thực tế",
      },
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured).slice(0, 6);

export const getRelatedProducts = (product: Product, limit = 3) =>
  products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);

export const getAllSlugs = () => products.map((p) => p.slug);
