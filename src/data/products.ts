export type Spec = { label: string; value: string };

export type Product = {
  slug: string;
  name: string;
  category: Category;
  tags?: Category[];
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
  "Thiết bị xây dựng",
  "Phụ tùng bơm bê tông",
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
    category: "Phụ tùng vận thăng",

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

  {
    slug: "co-ong-be-tong",
    name: "Co ống bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Co ống bê tông dùng để thay đổi hướng tuyến ống trong hệ thống bơm bê tông, cung cấp theo đường kính, bán kính và góc uốn phù hợp.",

    description:
      "Co ống bê tông là phụ kiện dùng trong hệ thống đường ống bơm bê tông, có chức năng thay đổi hướng tuyến ống tại công trường. Sản phẩm có nhiều cấu hình về đường kính, bán kính và góc uốn, phù hợp với các yêu cầu khác nhau của hệ thống bơm bê tông.",

    price: "Liên hệ báo giá",

    image: img("co-ong-be-tong"),

    alt: "Co ống bê tông dùng trong hệ thống bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Co ống bê tông",
      },
      {
        label: "Đường kính",
        value: "DN125, DN150, DN175",
      },
      {
        label: "Góc uốn",
        value: "15°, 20°, 25°, 45°, 90° và các cấu hình khác",
      },
      {
        label: "Bán kính",
        value: "Theo cấu hình sản phẩm",
      },
      {
        label: "Vật liệu",
        value: "Thép và vật liệu chống mài mòn theo từng loại",
      },
      {
        label: "Công nghệ",
        value: "Đúc",
      },
      {
        label: "Ứng dụng",
        value: "Hệ thống đường ống bơm bê tông",
      },
    ],
  },

  {
    slug: "cum-ong-be-tong",
    name: "Cùm ống bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Cùm ống bê tông dùng để liên kết các đoạn ống và phụ kiện trong hệ thống bơm bê tông, cung cấp theo đường kính và kiểu kết nối phù hợp.",

    description:
      "Cùm ống bê tông là phụ kiện liên kết dùng trong hệ thống đường ống bơm bê tông, hỗ trợ kết nối các đoạn ống và phụ kiện có mặt bích. Sản phẩm có nhiều kiểu cấu tạo như cùm bulông, cùm chốt, cùm điều chỉnh và cùm nêm, được lựa chọn theo đường kính và cấu hình kết nối của hệ thống.",

    price: "Liên hệ báo giá",

    image: img("goi-do-ong-be-tong"),

    alt: "Cùm ống bê tông dùng để kết nối đường ống bơm bê tông",

    gallery: [
      {
        src: img("cum-ong-be-tong"),
        alt: "Cùm ống bê tông dùng trong hệ thống bơm bê tông",
      },
    ],

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Cùm ống bê tông",
      },
      {
        label: "Đường kính",
        value: "DN125",
      },
      {
        label: "Đường kính mặt bích",
        value: "148 mm / 157 mm",
      },
      {
        label: "Vật liệu",
        value: "40Cr",
      },
      {
        label: "Công nghệ",
        value: "Rèn hoặc đúc",
      },
      {
        label: "Ứng dụng",
        value: "Máy móc xây dựng và đường ống bơm bê tông",
      },
    ],
  },

  {
    slug: "ong-bom-be-tong",
    name: "Ống bơm bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Ống bơm bê tông dùng để vận chuyển bê tông trong hệ thống bơm, có nhiều lựa chọn về chiều dài, độ dày và kiểu đầu nối.",

    description:
      "Ống bơm bê tông là bộ phận dùng để vận chuyển bê tông từ máy bơm đến vị trí thi công. Sản phẩm sử dụng vật liệu ST52, có nhiều lựa chọn về chiều dài, độ dày và kiểu đầu nối, phù hợp cho nhu cầu lắp đặt, thay thế và mở rộng hệ thống đường ống bơm bê tông.",

    price: "Liên hệ báo giá",

    image: img("ong-bom-be-tong"),

    alt: "Ống bơm bê tông dùng trong hệ thống bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Ống bơm bê tông",
      },
      {
        label: "Ứng dụng",
        value: "Vận chuyển bê tông",
      },
      {
        label: "Chiều dài",
        value: "1–6 m hoặc theo yêu cầu",
      },
      {
        label: "Vật liệu",
        value: "ST52",
      },
      {
        label: "Độ dày",
        value: "4.0 / 4.5 / 5.0 / 5.5 mm và các tùy chọn khác",
      },
      {
        label: "Khả năng phục vụ",
        value: "12.000 / 15.000 / 25.000 / 35.000 / 50.000 m³",
      },
      {
        label: "Kiểu đầu nối",
        value: "SK, ZX, MF, HD flange",
      },
      {
        label: "Đặc điểm",
        value: "Khả năng chống mài mòn cao, tuổi thọ sử dụng dài",
      },
    ],
  },

  {
    slug: "banh-xe-con-cho-cau-thap",
    name: "Bánh xe con cho cẩu tháp",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Bánh xe con lăn cẩu tháp là bộ phận thuộc cụm xe con, hỗ trợ di chuyển và dẫn hướng xe con dọc theo cần cẩu tháp.",

    description:
      "Bánh xe con lăn cẩu tháp là phụ tùng thuộc cụm xe con của cẩu tháp, được sử dụng để hỗ trợ chuyển động và dẫn hướng trong quá trình xe con di chuyển dọc theo cần. Sản phẩm được lựa chọn theo mẫu, kích thước và cấu hình thực tế của cẩu tháp, phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa thiết bị.",

    price: "Liên hệ báo giá",

    image: img("banh-xe-con-cho-cau-thap"),

    alt: "Bánh xe con cho cẩu tháp",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Bánh xe con lăn",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Di chuyển và dẫn hướng",
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
    slug: "bom-rua-ap-luc-cao-cho-may-bom-be-tong",
    name: "Bơm rửa áp lực cao cho máy bơm bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Bơm rửa áp lực cao dùng để vệ sinh đường ống và hệ thống máy bơm bê tông sau khi thi công.",

    description:
      "Bơm rửa áp lực cao cho máy bơm bê tông là thiết bị hỗ trợ vệ sinh đường ống và các bộ phận liên quan sau quá trình bơm. Sản phẩm giúp làm sạch hệ thống, phục vụ công tác bảo trì và duy trì hiệu quả vận hành của máy bơm bê tông.",

    price: "Liên hệ báo giá",

    image: img("bom-rua-ap-luc-cao-cho-may-bom-be-tong"),

    alt: "Bơm rửa áp lực cao cho máy bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Bơm rửa áp lực cao",
      },
      {
        label: "Ứng dụng",
        value: "Máy bơm bê tông",
      },
      {
        label: "Chức năng",
        value: "Vệ sinh đường ống và hệ thống bơm",
      },
      {
        label: "Mục đích",
        value: "Bảo trì sau thi công",
      },
      {
        label: "Cung cấp",
        value: "Theo mẫu và thông số thiết bị",
      },
    ],
  },

  {
    slug: "mo-boi-tron-goc-lithium-cho-may-bom-be-tong",
    name: "Mỡ bôi trơn gốc lithium cho máy bơm bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Mỡ bôi trơn gốc lithium dùng để bôi trơn và bảo vệ các chi tiết cơ khí trong máy bơm bê tông.",

    description:
      "Mỡ bôi trơn gốc lithium cho máy bơm bê tông được sử dụng để bôi trơn các chi tiết cơ khí, hỗ trợ giảm ma sát và bảo vệ bộ phận trong quá trình vận hành. Sản phẩm phù hợp cho công tác bảo dưỡng máy bơm bê tông theo khuyến nghị của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("mo-boi-tron-goc-lithium-cho-may-bom-be-tong"),

    alt: "Mỡ bôi trơn gốc lithium cho máy bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Mỡ bôi trơn gốc lithium",
      },
      {
        label: "Ứng dụng",
        value: "Máy bơm bê tông",
      },
      {
        label: "Chức năng",
        value: "Bôi trơn và bảo vệ chi tiết cơ khí",
      },
      {
        label: "Tác dụng",
        value: "Hỗ trợ giảm ma sát",
      },
      {
        label: "Cung cấp",
        value: "Theo nhu cầu bảo dưỡng thiết bị",
      },
    ],
  },

  {
    slug: "motor-thuy-luc-bom-be-tong",
    name: "Motor thủy lực bơm bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Motor thủy lực dùng trong hệ thống truyền động của máy bơm bê tông, cung cấp theo mẫu và thông số thực tế.",

    description:
      "Motor thủy lực bơm bê tông là phụ tùng thuộc hệ thống truyền động thủy lực của máy bơm bê tông. Sản phẩm được cung cấp theo mẫu, thông số và cấu hình thực tế của thiết bị, phù hợp cho nhu cầu thay thế và sửa chữa tại công trình.",

    price: "Liên hệ báo giá",

    image: img("motor-thuy-luc-bom-be-tong"),

    alt: "Motor thủy lực bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Motor thủy lực",
      },
      {
        label: "Ứng dụng",
        value: "Máy bơm bê tông",
      },
      {
        label: "Chức năng",
        value: "Truyền động thủy lực",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và thông số thiết bị",
      },
      {
        label: "Cung cấp",
        value: "Theo mẫu thực tế",
      },
    ],
  },

  {
    slug: "van-chong-tut-bom-be-tong",
    name: "Van chống tụt bơm bê tông",
    category: "Phụ tùng bơm bê tông",

    shortDesc:
      "Van chống tụt dùng trong hệ thống bơm bê tông, hỗ trợ kiểm soát dòng vật liệu và hạn chế hiện tượng tụt trong đường ống.",

    description:
      "Van chống tụt bơm bê tông là phụ tùng dùng trong hệ thống bơm để hỗ trợ kiểm soát dòng bê tông và hạn chế hiện tượng tụt trong đường ống. Sản phẩm được lựa chọn theo mẫu, kích thước và cấu hình phù hợp với máy bơm bê tông.",

    price: "Liên hệ báo giá",

    image: img("van-chong-tut-bom-be-tong"),

    alt: "Van chống tụt bơm bê tông",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Van chống tụt",
      },
      {
        label: "Ứng dụng",
        value: "Máy bơm bê tông",
      },
      {
        label: "Chức năng",
        value: "Kiểm soát dòng bê tông",
      },
      {
        label: "Tác dụng",
        value: "Hạn chế hiện tượng tụt trong đường ống",
      },
      {
        label: "Tương thích",
        value: "Theo mẫu và kích thước thiết bị",
      },
    ],
  },

  {
    slug: "khoi-dong-tu-schneider-lc1d12e7",
    name: "Khởi động từ Schneider LC1D12E7 12A 48V",
    category: "Phụ tùng vận thăng",
    tags: ["Phụ tùng vận thăng", "Phụ tùng cẩu tháp"],

    shortDesc:
      "Khởi động từ Schneider LC1D12E7 12A 48V dùng cho hệ thống điện điều khiển cẩu tháp và vận thăng. ",

    description:
      "Khởi động từ Schneider LC1D12E7 12A 48V là phụ tùng điện dùng trong hệ thống điều khiển và khởi động của cẩu tháp, vận thăng và các thiết bị nâng hạ tương ứng. Sản phẩm phù hợp cho nhu cầu thay thế, sửa chữa và bảo trì hệ thống điện điều khiển theo đúng thông số kỹ thuật của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("khoi-dong-tu-schneider-lc1d12e7"),

    alt: "Khởi động từ Schneider LC1D12E7 12A 48V",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Schneider",
      },
      {
        label: "Mã sản phẩm",
        value: "LC1D12E7",
      },
      {
        label: "Dòng điện",
        value: "12A",
      },
      {
        label: "Điện áp",
        value: "48V",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp và vận thăng",
      },
      {
        label: "Chức năng",
        value: "Khởi động và điều khiển mạch điện",
      },
    ],
  },

  {
    slug: "khoi-tiep-diem-tre-thoi-gian-schneider-ladr2",
    name: "Tiếp điểm trễ Schneider LADR2 1–30 giây",
    category: "Phụ tùng vận thăng",
    tags: ["Phụ tùng vận thăng", "Phụ tùng cẩu tháp"],

    shortDesc:
      "Tiếp điểm trễ Schneider LADR2 1–30 giây dùng cho mạch điều khiển điện cẩu tháp và vận thăng.",

    description:
      "Tiếp điểm trễ Schneider LADR2 1–30 giây là bộ phận điện dùng trong hệ thống điều khiển trễ thời gian của thiết bị nâng hạ. Sản phẩm phù hợp cho các mạch điều khiển của cẩu tháp và vận thăng, hỗ trợ chỉnh thời gian và tối ưu hoạt động của hệ thống điện.",

    price: "Liên hệ báo giá",

    image: img("khoi-tiep-diem-tre-thoi-gian-schneider-ladr2"),

    alt: "Tiếp điểm trễ Schneider LADR2 1–30 giây",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Schneider",
      },
      {
        label: "Mã sản phẩm",
        value: "LADR2",
      },
      {
        label: "Dải trễ",
        value: "1–30 giây",
      },
      {
        label: "Ứng dụng",
        value: "Hệ thống điều khiển cẩu tháp và vận thăng",
      },
      {
        label: "Chức năng",
        value: "Điều khiển trễ thời gian",
      },
    ],
  },

  {
    slug: "khoi-tiep-diem-tre-thoi-gian-schneider-ladr0",
    name: "Tiếp điểm trễ Schneider LADR0 0,3–3 giây",
    category: "Phụ tùng vận thăng",
    tags: ["Phụ tùng vận thăng", "Phụ tùng cẩu tháp"],

    shortDesc:
      "Tiếp điểm trễ Schneider LADR0 0,3–3 giây dùng cho mạch điều khiển trễ thời gian của hệ thống điện nâng hạ.",

    description:
      "Tiếp điểm trễ Schneider LADR0 0,3–3 giây là phụ tùng điện dùng trong mạch điều khiển trễ thời gian của cẩu tháp và vận thăng. Sản phẩm giúp điều chỉnh phản ứng của hệ thống điện, phù hợp cho sửa chữa, bảo trì và thay thế theo thông số kỹ thuật của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("khoi-tiep-diem-tre-thoi-gian-schneider-ladr0"),

    alt: "Tiếp điểm trễ Schneider LADR0 0,3–3 giây",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Schneider",
      },
      {
        label: "Mã sản phẩm",
        value: "LADR0",
      },
      {
        label: "Dải trễ",
        value: "0,3–3 giây",
      },
      {
        label: "Ứng dụng",
        value: "Điều khiển hệ thống điện cẩu tháp và vận thăng",
      },
      {
        label: "Chức năng",
        value: "Điều khiển trễ và tín hiệu",
      },
    ],
  },

  {
    slug: "cau-chinh-luu-diode-3-pha",
    name: "Cầu chỉnh lưu diode 3 pha Fuji Electric 6RI100G-160 100A 1600V",
    category: "Phụ tùng cẩu tháp",
    tags: ["Phụ tùng cẩu tháp", "Phụ tùng vận thăng"],

    shortDesc:
      "Cầu chỉnh lưu diode 3 pha Fuji Electric 6RI100G-160 100A 1600V dùng cho hệ thống điện cẩu tháp và các thiết bị điện nâng hạ.",

    description:
      "Cầu chỉnh lưu diode 3 pha Fuji Electric 6RI100G-160 100A 1600V là bộ phận điện dùng trong hệ thống chỉnh lưu của thiết bị nâng hạ, hỗ trợ ổn định nguồn và chuyển đổi điện áp cho cẩu tháp. Sản phẩm phù hợp cho việc thay thế, bảo trì và sửa chữa các mạch điện điều khiển và truyền động.",

    price: "Liên hệ báo giá",

    image: img("cau-chinh-luu-diode-3-pha"),

    alt: "Cầu chỉnh lưu diode 3 pha Fuji Electric 100A 1600V",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "Fuji Electric",
      },
      {
        label: "Mã sản phẩm",
        value: "6RI100G-160",
      },
      {
        label: "Cường độ",
        value: "100A",
      },
      {
        label: "Điện áp",
        value: "1600V",
      },
      {
        label: "Pha",
        value: "3 pha",
      },
      {
        label: "Ứng dụng",
        value: "Hệ thống điện cẩu tháp",
      },
    ],
  },

  {
    slug: "cong-tac-hanh-trinh-can-gat",
    name: "Công tắc hành trình CHINT YBLX-ME/8104",
    category: "Phụ tùng cẩu tháp",
    tags: ["Phụ tùng cẩu tháp", "Phụ tùng vận thăng"],

    shortDesc:
      "Công tắc hành trình CHINT YBLX-ME/8104 dùng cho cơ cấu giới hạn hành trình của cẩu tháp và vận thăng.",

    description:
      "Công tắc hành trình CHINT YBLX-ME/8104 là phụ kiện điện dùng để phát tín hiệu giới hạn hành trình trong hệ thống điều khiển của thiết bị nâng hạ. Sản phẩm phù hợp cho thay thế và bảo trì, giúp hệ thống phát hiện vị trí cuối hành trình và ngăn chặn vận hành vượt quá giới hạn.",

    price: "Liên hệ báo giá",

    image: img("cong-tac-hanh-trinh-can-gat"),

    alt: "Công tắc hành trình CHINT YBLX-ME/8104",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "CHINT",
      },
      {
        label: "Mã sản phẩm",
        value: "YBLX-ME/8104",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp và vận thăng",
      },
      {
        label: "Chức năng",
        value: "Giới hạn hành trình",
      },
      {
        label: "Vai trò",
        value: "Phát tín hiệu dừng và bảo vệ thiết bị",
      },
    ],
  },

  {
    slug: "cong-tac-hanh-trinh-dau-nhan",
    name: "Công tắc hành trình CHINT YBLX-ME/8111",
    category: "Phụ tùng cẩu tháp",
    tags: ["Phụ tùng cẩu tháp", "Phụ tùng vận thăng"],

    shortDesc:
      "Công tắc hành trình CHINT YBLX-ME/8111 dùng cho hệ thống điều khiển và an toàn của cẩu tháp, vận thăng.",

    description:
      "Công tắc hành trình CHINT YBLX-ME/8111 là phụ kiện điện dùng trong hệ thống điều khiển và an toàn của máy móc nâng hạ. Sản phẩm giúp phát hiện vị trí, ngăn chặn hành trình quá mức và hỗ trợ bảo trì thiết bị với độ tin cậy cao trong môi trường công trường.",

    price: "Liên hệ báo giá",

    image: img("cong-tac-hanh-trinh-dau-nhan"),

    alt: "Công tắc hành trình CHINT YBLX-ME/8111",

    featured: true,

    specs: [
      {
        label: "Thương hiệu",
        value: "CHINT",
      },
      {
        label: "Mã sản phẩm",
        value: "YBLX-ME/8111",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp và vận thăng",
      },
      {
        label: "Chức năng",
        value: "Giới hạn và an toàn hành trình",
      },
      {
        label: "Vai trò",
        value: "Phát tín hiệu dừng và bảo vệ thiết bị",
      },
    ],
  },

  {
    slug: "cam-bien-tai-trong",
    name: "Cảm biến tải trọng",
    category: "Phụ tùng vận thăng",

    shortDesc:
      "Cảm biến tải trọng dùng để giám sát tải trọng và kiểm soát hoạt động của thiết bị nâng hạ.",

    description:
      "Cảm biến tải trọng là bộ phận quan trọng trong hệ thống điện và điều khiển của vận thăng, giúp theo dõi tải trọng và an toàn vận hành. Sản phẩm phù hợp cho bảo trì, thay thế và nâng cấp hệ thống giám sát tải trọng của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("cam-bien-tai-trong"),

    alt: "Cảm biến tải trọng vận thăng",

    gallery: [
      { src: img("cam-bien-tai-trong1"), alt: "Cảm biến tải trọng phụ tùng vận thăng" },
    ],

    featured: true,

    specs: [
      { label: "Loại sản phẩm", value: "Cảm biến tải trọng" },
      { label: "Ứng dụng", value: "Vận thăng" },
      { label: "Chức năng", value: "Giám sát tải trọng" },
      { label: "Vai trò", value: "Đảm bảo an toàn vận hành" },
    ],
  },

  {
    slug: "mast-climbing-work-platform",
    name: "Mast Climbing Work Platform",
    category: "Thiết bị xây dựng",

    shortDesc:
      "Mast climbing work platform là thiết bị làm việc theo chiều cao được dùng trong công trình xây dựng.",

    description:
      "Mast climbing work platform là hệ thống làm việc theo chiều cao được sử dụng trong thi công công trình lớn. Thiết bị hỗ trợ nâng người và vật tư lên cao, cải thiện an toàn, hiệu quả và độ linh hoạt trong quá trình xây dựng.",

    price: "Liên hệ báo giá",

    image: img("mast-climbing-work-platform"),

    alt: "Mast Climbing Work Platform",

    featured: true,

    specs: [
      { label: "Loại thiết bị", value: "Mast climbing work platform" },
      { label: "Phân loại", value: "Thiết bị xây dựng" },
      { label: "Ứng dụng", value: "Thi công tòa nhà, công trường cao tầng" },
      { label: "Tác dụng", value: "Hỗ trợ làm việc tại độ cao" },
    ],
  },

  {
    slug: "bo-thang-van-thang",
    name: "Bố thắng vận thăng",
    category: "Phụ tùng vận thăng",

    shortDesc:
      "Bố thắng vận thăng dùng cho hệ thống phanh của vận thăng, hỗ trợ kiểm soát và giữ tải trong quá trình nâng hạ.",

    description:
      "Bố thắng vận thăng là phụ tùng thuộc hệ thống phanh của vận thăng, được sử dụng để hỗ trợ quá trình hãm và giữ tải khi thiết bị vận hành. Sản phẩm phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa vận thăng lồng tại công trình. Theo thông tin tham khảo, bố thắng vận thăng lồng có kích thước 225 x 55 mm.",

    price: "Liên hệ báo giá",

    image: img("bo-thang-van-thang"),

    alt: "Bố thắng vận thăng",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Bố thắng vận thăng",
      },
      {
        label: "Ứng dụng",
        value: "Vận thăng",
      },
      {
        label: "Chức năng",
        value: "Hãm và giữ tải trong quá trình nâng hạ",
      },
      {
        label: "Kích thước",
        value: "225 x 55 mm",
      },
      {
        label: "Mục đích",
        value: "Thay thế, bảo trì và sửa chữa",
      },
    ],
  },

  {
    slug: "bo-thang-cau-thap",
    name: "Bố thắng cẩu tháp",
    category: "Phụ tùng cẩu tháp",

    shortDesc:
      "Bố thắng cẩu tháp là phụ tùng thuộc hệ thống phanh, dùng để hỗ trợ hãm và giữ tải trong quá trình vận hành cẩu tháp.",

    description:
      "Bố thắng cẩu tháp là phụ tùng thuộc hệ thống phanh của cẩu tháp, hỗ trợ quá trình hãm và giữ tải trong quá trình thiết bị vận hành. Sản phẩm phục vụ nhu cầu thay thế, bảo trì và sửa chữa hệ thống phanh cẩu tháp, được lựa chọn theo model, kích thước và cấu hình thực tế của thiết bị.",

    price: "Liên hệ báo giá",

    image: img("bo-thang-cau-thap"),

    alt: "Bố thắng cẩu tháp",

    featured: true,

    specs: [
      {
        label: "Loại sản phẩm",
        value: "Bố thắng cẩu tháp",
      },
      {
        label: "Ứng dụng",
        value: "Cẩu tháp",
      },
      {
        label: "Chức năng",
        value: "Hãm và giữ tải",
      },
      {
        label: "Mục đích",
        value: "Thay thế, bảo trì và sửa chữa",
      },
      {
        label: "Tương thích",
        value: "Theo model và kích thước thiết bị",
      },
    ],
  },

{
  slug: "bo-gioi-han-khong-co-encoder",
  name: "Bộ giới hạn không có encoder",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Bộ giới hạn không có encoder dùng trong hệ thống điều khiển cẩu tháp, hỗ trợ kiểm soát giới hạn hành trình và bảo vệ cơ cấu khi vận hành.",

  description:
    "Bộ giới hạn không có encoder là thiết bị thuộc hệ thống điều khiển và giới hạn hành trình của cẩu tháp. Sản phẩm được sử dụng để xác định và kiểm soát các vị trí giới hạn của cơ cấu trong quá trình vận hành, hỗ trợ ngăn cơ cấu di chuyển vượt quá phạm vi được thiết lập. Phiên bản không có encoder phù hợp với các hệ thống không yêu cầu chức năng xác định vị trí thông qua encoder. Sản phẩm phục vụ nhu cầu thay thế, bảo trì và sửa chữa, cần được lựa chọn theo model và cấu hình thực tế của cẩu tháp.",

  price: "Liên hệ báo giá",

  image: img("bo-gioi-han-khong-co-encoder"),

  alt: "Bộ giới hạn không có encoder cho cẩu tháp",

  gallery: [
    {
      src: img("bo-gioi-han-khong-co-encoder1"),
      alt: "Bộ giới hạn không có encoder phụ tùng cẩu tháp",
    },
  ],

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Bộ giới hạn",
    },
    {
      label: "Phiên bản",
      value: "Không có encoder",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Hệ thống",
      value: "Điều khiển và giới hạn hành trình",
    },
    {
      label: "Chức năng",
      value: "Kiểm soát giới hạn hành trình",
    },
    {
      label: "Tác dụng",
      value: "Hỗ trợ ngăn cơ cấu vượt quá vị trí giới hạn",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình cẩu tháp",
    },
  ],
},

{
  slug: "bo-gioi-han-co-encoder",
  name: "Bộ giới hạn có encoder",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Bộ giới hạn có encoder dùng trong hệ thống điều khiển cẩu tháp, hỗ trợ kiểm soát giới hạn hành trình kết hợp xác định vị trí.",

  description:
    "Bộ giới hạn có encoder là thiết bị thuộc hệ thống điều khiển và giới hạn hành trình của cẩu tháp, kết hợp chức năng giới hạn với encoder để hỗ trợ xác định vị trí của cơ cấu trong quá trình vận hành. Sản phẩm phù hợp với các hệ thống cần kiểm soát vị trí và hành trình chính xác hơn so với cấu hình không có encoder. Thiết bị phục vụ nhu cầu thay thế, bảo trì và sửa chữa cẩu tháp, cần được lựa chọn theo model, cấu hình và yêu cầu kỹ thuật thực tế của hệ thống.",

  price: "Liên hệ báo giá",

  image: img("bo-gioi-han-co-encoder"),

  alt: "Bộ giới hạn có encoder cho cẩu tháp",

  gallery: [
    {
      src: img("bo-gioi-han-co-encoder1"),
      alt: "Bộ giới hạn có encoder phụ tùng cẩu tháp",
    },
  ],

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Bộ giới hạn",
    },
    {
      label: "Phiên bản",
      value: "Có encoder",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Hệ thống",
      value: "Điều khiển và giới hạn hành trình",
    },
    {
      label: "Chức năng",
      value: "Kiểm soát giới hạn hành trình và hỗ trợ xác định vị trí",
    },
    {
      label: "Tác dụng",
      value: "Hỗ trợ kiểm soát vị trí và hành trình của cơ cấu",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình cẩu tháp",
    },
  ],
},

{
  slug: "bo-cong-tac-gioi-han",
  name: "Bộ công tắc giới hạn cẩu tháp",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Bộ công tắc giới hạn cẩu tháp dùng để kiểm soát giới hạn hành trình của các cơ cấu, phát tín hiệu khi đạt vị trí giới hạn và hỗ trợ bảo vệ thiết bị trong quá trình vận hành.",

  description:
    "Bộ công tắc giới hạn cẩu tháp là cụm thiết bị thuộc hệ thống điều khiển và an toàn của cẩu tháp, được sử dụng để xác định vị trí giới hạn của cơ cấu trong quá trình vận hành. Khi cơ cấu đạt đến vị trí giới hạn, công tắc thực hiện đóng hoặc ngắt mạch điều khiển theo cấu hình của hệ thống, từ đó hỗ trợ dừng chuyển động và hạn chế tình trạng vận hành vượt quá phạm vi cho phép. Sản phẩm phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa hệ thống cẩu tháp, được lựa chọn theo loại thiết bị, vị trí lắp đặt và cấu hình mạch điều khiển thực tế.",

  price: "Liên hệ báo giá",

  image: img("bo-cong-tac-gioi-han"),

  alt: "Bộ công tắc giới hạn cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Bộ công tắc giới hạn",
    },
    {
      label: "Ứng dụng",
      value: "Hệ thống cẩu tháp",
    },
    {
      label: "Chức năng",
      value: "Kiểm soát giới hạn hành trình",
    },
    {
      label: "Tác dụng",
      value: "Phát tín hiệu và hỗ trợ dừng cơ cấu khi đạt giới hạn",
    },
    {
      label: "Hệ thống",
      value: "Điều khiển và an toàn cẩu tháp",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo loại cẩu tháp và cấu hình hệ thống",
    },
    {
      label: "Cung cấp",
      value: "Theo mẫu và thông số thiết bị thực tế",
    },
  ],
},

{
  slug: "con-lan",
  name: "Con lăn vận thăng",
  category: "Phụ tùng vận thăng",

  shortDesc:
    "Con lăn vận thăng dùng để dẫn hướng lồng vận thăng di chuyển lên xuống theo phương thẳng đứng, giúp chuyển động ổn định và giảm ma sát.",

  description:
    "Con lăn vận thăng (Roller Guide) là phụ tùng thuộc hệ thống dẫn hướng của vận thăng lồng, được sử dụng để dẫn hướng lồng vận thăng di chuyển lên xuống theo phương thẳng đứng. Sản phẩm gồm con lăn đơn và cụm con lăn đôi, hỗ trợ giảm ma sát và mài mòn trong quá trình vận hành. Con lăn được lựa chọn phù hợp với cấu hình và kích thước thực tế của hệ thống vận thăng, phục vụ nhu cầu thay thế, bảo trì và sửa chữa.",

  price: "Liên hệ báo giá",

  image: img("con-lan"),

  alt: "Con lăn vận thăng dẫn hướng lồng vận thăng",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Con lăn vận thăng - Roller Guide",
    },
    {
      label: "Ứng dụng",
      value: "Dẫn hướng lồng vận thăng",
    },
    {
      label: "Cấu hình",
      value: "Con lăn đơn và cụm con lăn đôi",
    },
    {
      label: "Đường kính lớn nhất",
      value: "Ø88 mm",
    },
    {
      label: "Đường kính nhỏ nhất",
      value: "Ø74 mm",
    },
    {
      label: "Bán kính cong",
      value: "R = 39 mm",
    },
    {
      label: "Bề dày",
      value: "B = 49 mm",
    },
    {
      label: "Khối lượng",
      value: "1.6 kg",
    },
  ],
},

{
  slug: "chot",
  name: "Chốt cẩu tháp",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Chốt cẩu tháp là chi tiết cơ khí dùng để liên kết, cố định và giữ ổn định các bộ phận trong kết cấu và cơ cấu của cẩu tháp.",

  description:
    "Chốt cẩu tháp là chi tiết cơ khí được sử dụng tại các vị trí liên kết và cố định trong hệ thống cẩu tháp. Sản phẩm có vai trò giữ các bộ phận đúng vị trí, hỗ trợ duy trì liên kết cơ khí trong quá trình thiết bị làm việc. Chốt được sử dụng cho nhu cầu thay thế, bảo trì và sửa chữa cẩu tháp, đặc biệt trong trường hợp chi tiết cũ bị hao mòn hoặc cần thay mới. Khi lựa chọn cần đối chiếu mẫu, kích thước và vị trí lắp đặt thực tế của thiết bị để đảm bảo phù hợp.",

  price: "Liên hệ báo giá",

  image: img("chot"),

  alt: "Chốt cẩu tháp phụ tùng cơ khí",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Chốt cẩu tháp",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Nhóm sản phẩm",
      value: "Phụ tùng cơ khí",
    },
    {
      label: "Chức năng",
      value: "Liên kết và cố định các bộ phận",
    },
    {
      label: "Vai trò",
      value: "Giữ ổn định vị trí các chi tiết liên kết",
    },
    {
      label: "Mục đích sử dụng",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo mẫu, kích thước và vị trí lắp đặt thực tế",
    },
    {
      label: "Cung cấp",
      value: "Theo mẫu thực tế của thiết bị",
    },
  ],
},

{
  slug: "tay-trang",
  name: "Tay trang cẩu tháp",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Tay trang điều khiển cẩu tháp dùng để điều khiển các chuyển động nâng hạ, di chuyển xe con và các chức năng vận hành của cẩu tháp.",

  description:
    "Tay trang cẩu tháp là thiết bị điều khiển được sử dụng trong hệ thống vận hành cẩu tháp, hỗ trợ người vận hành thực hiện các thao tác điều khiển thiết bị. Tay trang được sử dụng để điều khiển các chuyển động như lên cáp, xuống cáp, ra xe con và vào xe con. Sản phẩm có các phiên bản tay trang điều khiển 4 số và 5 số, được cung cấp phù hợp với từng loại cẩu tháp và cấu hình hệ thống điều khiển thực tế.",

  price: "Liên hệ báo giá",

  image: img("tay-trang"),

  alt: "Tay trang điều khiển cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Tay trang điều khiển cẩu tháp",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Chức năng",
      value: "Điều khiển chuyển động của cẩu tháp",
    },
    {
      label: "Điều khiển",
      value: "Lên cáp, xuống cáp, ra xe con, vào xe con",
    },
    {
      label: "Phiên bản",
      value: "Tay trang 4 số và 5 số",
    },
    {
      label: "Model tham khảo",
      value: "QTZ63, JTZ63, TCT5512, TCT6012",
    },
    {
      label: "Mục đích",
      value: "Thay thế, sửa chữa và bảo trì hệ thống điều khiển",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình cẩu tháp thực tế",
    },
  ],
},

{
  slug: "tu-tro",
  name: "Tủ trở",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Tủ trở dùng trong hệ thống điện của cẩu tháp, phục vụ việc lắp đặt, thay thế và bảo trì các thành phần điện của thiết bị.",

  description:
    "Tủ trở là thiết bị thuộc hệ thống điện của cẩu tháp, được sử dụng trong quá trình vận hành và điều khiển thiết bị. Sản phẩm phục vụ nhu cầu thay thế, sửa chữa và bảo trì hệ thống điện cẩu tháp tại công trường. Khi lựa chọn tủ trở, cần đối chiếu theo model, cấu hình hệ thống điện và thông số thực tế của thiết bị để đảm bảo phù hợp với vị trí lắp đặt.",

  price: "Liên hệ báo giá",

  image: img("tu-tro"),

  alt: "Tủ trở dùng trong hệ thống điện cẩu tháp",

  gallery: [
    {
      src: img("tu-tro1"),
      alt: "Tủ trở cẩu tháp",
    },
  ],

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Tủ trở",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Nhóm sản phẩm",
      value: "Thiết bị điện",
    },
    {
      label: "Hệ thống",
      value: "Hệ thống điện cẩu tháp",
    },
    {
      label: "Mục đích sử dụng",
      value: "Thay thế, sửa chữa và bảo trì",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình hệ thống điện",
    },
    {
      label: "Cung cấp",
      value: "Theo mẫu và thông số thiết bị thực tế",
    },
  ],
},

{
  slug: "giam-chan-gr75",
  name: "Giảm chấn GR75",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Giảm chấn GR75 dùng cho cẩu tháp, hỗ trợ hấp thụ rung động và giảm chấn động trong quá trình vận hành thiết bị.",

  description:
    "Giảm chấn GR75 là phụ tùng thuộc hệ thống giảm chấn của cẩu tháp, có chức năng hỗ trợ hấp thụ rung động và giảm tác động của dao động trong quá trình thiết bị vận hành. Sản phẩm phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa các cơ cấu sử dụng giảm chấn trên cẩu tháp. Khi lựa chọn cần đối chiếu model, kích thước và cấu hình thực tế của thiết bị để đảm bảo phù hợp.",

  price: "Liên hệ báo giá",

  image: img("giam-chan-gr75"),

  alt: "Giảm chấn GR75 dùng cho cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Giảm chấn",
    },
    {
      label: "Mã / mẫu",
      value: "GR75",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Chức năng",
      value: "Giảm chấn và hấp thụ rung động",
    },
    {
      label: "Tác dụng",
      value: "Hỗ trợ giảm dao động và chấn động",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình cẩu tháp",
    },
  ],
},

{
  slug: "giam-chan-m7",
  name: "Giảm chấn M7",
  category: "Phụ tùng vận thăng",

  shortDesc:
    "Giảm chấn M7 dùng cho vận thăng, hỗ trợ hấp thụ rung động và giảm chấn động trong quá trình nâng hạ.",

  description:
    "Giảm chấn M7 là phụ tùng sử dụng trong hệ thống vận thăng, hỗ trợ hấp thụ rung động và giảm tác động của chấn động lên cơ cấu trong quá trình nâng hạ. Sản phẩm phục vụ nhu cầu thay thế và bảo trì các bộ phận giảm chấn của vận thăng, góp phần hỗ trợ thiết bị vận hành ổn định. Khi lựa chọn cần kiểm tra model, kích thước và cấu hình thực tế của thiết bị.",

  price: "Liên hệ báo giá",

  image: img("giam-chan-m7"),

  alt: "Giảm chấn M7 dùng cho vận thăng",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Giảm chấn",
    },
    {
      label: "Mã / mẫu",
      value: "M7",
    },
    {
      label: "Ứng dụng",
      value: "Vận thăng",
    },
    {
      label: "Chức năng",
      value: "Giảm chấn và hấp thụ rung động",
    },
    {
      label: "Tác dụng",
      value: "Hỗ trợ giảm dao động và chấn động",
    },
    {
      label: "Mục đích",
      value: "Thay thế và bảo trì vận thăng",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình vận thăng",
    },
  ],
},

{
  slug: "giam-chan-m8",
  name: "Giảm chấn M8",
  category: "Phụ tùng vận thăng",

  shortDesc:
    "Giảm chấn M8 dùng cho vận thăng, hỗ trợ hấp thụ rung động, giảm chấn động và ổn định cơ cấu trong quá trình vận hành.",

  description:
    "Giảm chấn M8 là phụ tùng thuộc hệ thống vận thăng, được sử dụng để hỗ trợ hấp thụ rung động và giảm tác động của chấn động trong quá trình thiết bị hoạt động. Sản phẩm phù hợp cho nhu cầu thay thế, bảo trì và sửa chữa các bộ phận giảm chấn trên vận thăng. Để đảm bảo khả năng lắp đặt phù hợp, cần đối chiếu model, kích thước và cấu hình thực tế của thiết bị trước khi thay thế.",

  price: "Liên hệ báo giá",

  image: img("giam-chan-m8"),

  alt: "Giảm chấn M8 dùng cho vận thăng",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Giảm chấn",
    },
    {
      label: "Mã / mẫu",
      value: "M8",
    },
    {
      label: "Ứng dụng",
      value: "Vận thăng",
    },
    {
      label: "Chức năng",
      value: "Giảm chấn và hấp thụ rung động",
    },
    {
      label: "Tác dụng",
      value: "Hỗ trợ giảm dao động và chấn động",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và sửa chữa",
    },
    {
      label: "Tương thích",
      value: "Theo model và cấu hình vận thăng",
    },
  ],
},

{
  slug: "bao-gio-1-220v",
  name: "Báo gió 1 (220V)",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Báo gió 1 (220V) là thiết bị cảnh báo gió dùng cho cẩu tháp, hỗ trợ theo dõi điều kiện gió và cảnh báo người vận hành khi cần thiết.",

  description:
    "Báo gió 1 (220V) là thiết bị thuộc hệ thống cảnh báo và an toàn của cẩu tháp, được sử dụng để hỗ trợ nhận biết điều kiện gió trong quá trình vận hành thiết bị ngoài trời. Sản phẩm sử dụng nguồn điện 220V và phục vụ nhu cầu thay thế, bảo trì hoặc bổ sung hệ thống cảnh báo gió cho cẩu tháp. Khi lựa chọn sản phẩm cần đối chiếu điện áp và cấu hình thực tế của hệ thống.",

  price: "Liên hệ báo giá",

  image: img("bao-gio-1-220V"),

  alt: "Báo gió 1 220V dùng cho cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Báo gió",
    },
    {
      label: "Phiên bản",
      value: "Báo gió 1",
    },
    {
      label: "Điện áp",
      value: "220V",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Hệ thống",
      value: "Cảnh báo và an toàn",
    },
    {
      label: "Chức năng",
      value: "Theo dõi và cảnh báo điều kiện gió",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và bổ sung hệ thống",
    },
    {
      label: "Tương thích",
      value: "Theo cấu hình hệ thống cẩu tháp",
    },
  ],
},

{
  slug: "bao-gio-1-22v",
  name: "Báo gió 1 (22V)",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Báo gió 1 (22V) là thiết bị cảnh báo gió dùng cho cẩu tháp, sử dụng nguồn điện 22V và hỗ trợ theo dõi điều kiện gió trong quá trình vận hành.",

  description:
    "Báo gió 1 (22V) là thiết bị thuộc hệ thống cảnh báo và an toàn của cẩu tháp, được sử dụng để hỗ trợ nhận biết điều kiện gió trong quá trình vận hành. Sản phẩm sử dụng nguồn điện 22V, phù hợp với các hệ thống có cấu hình nguồn tương ứng. Thiết bị phục vụ nhu cầu thay thế, bảo trì hoặc bổ sung hệ thống cảnh báo gió, cần được đối chiếu với cấu hình thực tế của cẩu tháp trước khi lắp đặt.",

  price: "Liên hệ báo giá",

  image: img("bao-gio-1-22V"),

  alt: "Báo gió 1 22V dùng cho cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Báo gió",
    },
    {
      label: "Phiên bản",
      value: "Báo gió 1",
    },
    {
      label: "Điện áp",
      value: "22V",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Hệ thống",
      value: "Cảnh báo và an toàn",
    },
    {
      label: "Chức năng",
      value: "Theo dõi và cảnh báo điều kiện gió",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và bổ sung hệ thống",
    },
    {
      label: "Tương thích",
      value: "Theo cấu hình nguồn và hệ thống cẩu tháp",
    },
  ],
},

{
  slug: "bao-gio-2-220v",
  name: "Báo gió 2 (220V)",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Báo gió 2 (220V) là thiết bị cảnh báo gió dùng cho cẩu tháp, hỗ trợ nhận biết điều kiện gió và tăng cường cảnh báo trong quá trình vận hành.",

  description:
    "Báo gió 2 (220V) là thiết bị thuộc hệ thống cảnh báo và an toàn của cẩu tháp, được sử dụng để hỗ trợ theo dõi điều kiện gió khi thiết bị hoạt động ngoài trời. Sản phẩm sử dụng nguồn điện 220V và phục vụ nhu cầu thay thế, bảo trì hoặc bổ sung hệ thống cảnh báo gió của cẩu tháp. Việc lựa chọn cần được đối chiếu theo cấu hình hệ thống và yêu cầu kỹ thuật thực tế của thiết bị.",

  price: "Liên hệ báo giá",

  image: img("bao-gio-2-220V"),

  alt: "Báo gió 2 220V dùng cho cẩu tháp",

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Báo gió",
    },
    {
      label: "Phiên bản",
      value: "Báo gió 2",
    },
    {
      label: "Điện áp",
      value: "220V",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Hệ thống",
      value: "Cảnh báo và an toàn",
    },
    {
      label: "Chức năng",
      value: "Theo dõi và cảnh báo điều kiện gió",
    },
    {
      label: "Mục đích",
      value: "Thay thế, bảo trì và bổ sung hệ thống",
    },
    {
      label: "Tương thích",
      value: "Theo cấu hình hệ thống cẩu tháp",
    },
  ],
},

{
  slug: "ac-than-cau",
  name: "Ắc thân cẩu",
  category: "Phụ tùng cẩu tháp",

  shortDesc:
    "Ắc thân cẩu là chi tiết liên kết cơ khí dùng để cố định và kết nối các bộ phận trong kết cấu thân cẩu tháp, phù hợp cho nhu cầu thay thế và bảo trì.",

  description:
    "Ắc thân cẩu là phụ tùng cơ khí được sử dụng tại các vị trí liên kết trong kết cấu thân cẩu tháp. Sản phẩm có vai trò kết nối, cố định và duy trì sự ổn định của các bộ phận trong quá trình lắp dựng và vận hành thiết bị. Ắc được cung cấp phục vụ nhu cầu thay thế, sửa chữa và bảo trì cẩu tháp. Khi lựa chọn cần đối chiếu mẫu, kích thước, vị trí lắp đặt và cấu hình thực tế của cẩu để đảm bảo phù hợp.",

  price: "Liên hệ báo giá",

  image: img("ac-than-cau"),

  alt: "Ắc thân cẩu phụ tùng cẩu tháp",

  gallery: [
    {
      src: img("ac-than-cau-loai-2"),
      alt: "Ắc thân cẩu loại 2",
    },
  ],

  featured: true,

  specs: [
    {
      label: "Loại sản phẩm",
      value: "Ắc thân cẩu",
    },
    {
      label: "Ứng dụng",
      value: "Cẩu tháp",
    },
    {
      label: "Nhóm sản phẩm",
      value: "Phụ tùng cơ khí",
    },
    {
      label: "Vị trí sử dụng",
      value: "Kết cấu thân cẩu",
    },
    {
      label: "Chức năng",
      value: "Liên kết và cố định các bộ phận",
    },
    {
      label: "Vai trò",
      value: "Duy trì liên kết và ổn định kết cấu",
    },
    {
      label: "Mục đích sử dụng",
      value: "Thay thế, sửa chữa và bảo trì",
    },
    {
      label: "Tương thích",
      value: "Theo mẫu, kích thước và cấu hình cẩu",
    },
    {
      label: "Cung cấp",
      value: "Theo mẫu thực tế của thiết bị",
    },
  ],
},

  ];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);

export const getFeaturedProducts = () =>
  products.filter((p) => p.featured).slice(0, 6);

export const getRelatedProducts = (product: Product, limit = 3) => {
  const relatedCategories = new Set([product.category, ...(product.tags ?? [])]);

  return products
    .filter((p) => {
      const pCategories = new Set([p.category, ...(p.tags ?? [])]);
      return p.slug !== product.slug && [...relatedCategories].some((c) => pCategories.has(c));
    })
    .slice(0, limit);
};

export const getAllSlugs = () => products.map((p) => p.slug);
