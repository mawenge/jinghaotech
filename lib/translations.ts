export type Language = 'zh' | 'en'

export const translations = {
  zh: {
    // Header
    header: {
      brand: '致以科技',
      company: '深圳市致以科技有限公司',
      nav: {
        home: '首页',
        about: '关于我们',
        equipment: '设备展示',
        cases: '加工案例',
        contact: '联系我们',
      },
    },

    // Hero
    hero: {
      title: '专业高效 · 专注CNC加工领域',
      subtitle: '快速响应，品质保证，价格透明，按需生产',
      features: {
        iso: 'ISO9001认证',
        quote: '24小时报价',
        precision: '精密加工',
      },
      cta: {
        consult: '立即咨询',
        learn: '了解更多',
      },
      experience: '年行业经验',
    },

    // About
    about: {
      title: '关于致以科技',
      description: '深圳市致以科技有限公司是一家ISO9001认证的专业CNC加工制造商，专注于精密零件加工、快速原型制作和小批量生产服务',
      values: {
        quick: {
          title: '快速响应',
          desc: '24小时内快速报价',
          detail: '专业团队快速响应客户需求',
        },
        quality: {
          title: '品质保证',
          desc: 'ISO9001认证',
          detail: '严格质量管理体系确保产品质量',
        },
        price: {
          title: '价格透明',
          desc: '成本可控',
          detail: '合理价格，无隐藏费用',
        },
        custom: {
          title: '按需生产',
          desc: '满足个性化需求',
          detail: '灵活的生产方案适应不同订单需求',
        },
      },
      advantages: '我们的优势',
      advantagesDesc: '我们拥有经验丰富的技术团队和先进的生产设备，能够为客户提供从设计到生产的一站式精密加工服务。无论是原型制作还是批量生产，我们都以严格的品质控制和高效的交付能力，满足客户的各种需求。',
      features: {
        experience: '8年+ 行业经验',
        iso: 'ISO9001质量认证',
        workshop: '4000平米现代化厂房',
        equipment: '多台先进CNC加工设备',
      },
      workshopAlt: '致以科技生产车间',
    },

    // Equipment
    equipment: {
      title: '我们拥有多台先进加工设备',
      description: '配备多台国际先进加工设备，为客户提供高质量的精密加工服务',
      items: {
        aluminum: { title: '铝件加工中心', desc: '专业铝合金精密加工设备' },
        steel: { title: '钢件加工中心', desc: '高强度钢材加工解决方案' },
        lathe: { title: '数控车床', desc: '高精度车削加工设备' },
        fiveAxis: { title: '五轴加工中心', desc: '复杂零件五轴联动加工' },
        cmm: { title: '三坐标测量仪', desc: '精密检测与质量保证' },
        other: { title: '其他精密设备', desc: '多元化加工能力支持' },
      },
    },

    // Capabilities
    capabilities: {
      title: '我们可以加工多种材料',
      description: '丰富的材料加工经验，满足不同行业和应用的精密加工需求',
      materials: {
        title: '可加工材料',
        aluminum: { name: '铝合金', types: '6061 / 7075 / 5052' },
        stainless: { name: '不锈钢', types: '303 / 304 / 316 / 416 / 420' },
        steel: { name: '钢材', types: '12L14 / 1215 / 1018 / 4140' },
        copper: { name: '铜合金', types: '黄铜 / 青铜 / 铜' },
        plastic: { name: '工程塑料', types: 'PEEK / ABS / Nylon / Polycarbonate' },
        titanium: { name: '钛合金', types: 'Gr2 / Gr5 / TC4' },
      },
      processing: {
        title: '加工能力',
        tolerance: { title: '加工精度', value: '±0.01mm', desc: '精密加工，严格质量控制' },
        surface: { title: '表面处理', treatments: ['阳极氧化', '电镀', '喷涂', '抛光', '钝化'] },
        maxSize: { title: '最大加工尺寸', value: '1500×800×500', unit: 'mm (长×宽×高)' },
      },
    },

    // Advantages
    advantages: {
      title: '我们的服务优势',
      description: '专业团队、先进设备、严格质量管理，为客户提供全方位的精密加工服务',
      items: {
        oneOnOne: { title: '一对一服务', desc: '专属客户经理全程跟进，提供个性化服务方案' },
        quickQuote: { title: '24小时快速报价', desc: '专业团队快速响应，24小时内提供详细报价' },
        precision: { title: '公差精准', desc: '精密加工设备，确保产品公差精确到±0.01mm' },
        quality: { title: '严苛质检', desc: 'ISO9001质量体系，多道工序严格质量检测' },
        delivery: { title: '按时交付', desc: '科学的生产计划管理，确保准时交付承诺' },
        support: { title: '售后无忧', desc: '完善的售后服务体系，随时响应客户需求' },
      },
      slogan: '选择致以科技，选择品质保障',
      sloganDesc: '我们致力于为每一位客户提供最优质的精密加工服务，从设计到交付，全程无忧',
    },

    // Industries
    industries: {
      title: '我们的产品广泛应用于多个行业',
      description: '凭借丰富的行业经验和卓越的加工能力，为各行业客户提供高品质的精密零件',
      items: {
        auto: {
          title: '汽车工业',
          desc: '为汽车行业提供高精度零部件加工服务',
          applications: ['发动机零部件', '传动系统零件', '底盘组件', '内饰件'],
        },
        aerospace: {
          title: '航空航天',
          desc: '满足航空航天领域的高标准加工要求',
          applications: ['飞机结构件', '发动机零件', '精密连接件', '测试设备零件'],
        },
        medical: {
          title: '医疗器械',
          desc: '符合医疗器械行业的严格质量标准',
          applications: ['手术器械', '诊断设备零件', '植入物组件', '医疗外壳'],
        },
        electronics: {
          title: '消费电子',
          desc: '为消费电子产品提供精密零件加工',
          applications: ['手机外壳', '散热组件', '连接器', '精密结构件'],
        },
      },
    },

    // Case Studies
    cases: {
      title: '加工案例展示',
      description: '精益求精的加工工艺，为各行业客户提供高品质的精密零件',
      items: {
        case1: { title: '精密铝合金零件', desc: '为汽车行业加工的高精度铝合金零部件' },
        case2: { title: '不锈钢复杂结构件', desc: '医疗器械用不锈钢精密加工件' },
        case3: { title: '五轴加工零件', desc: '航空航天领域复杂几何形状零件' },
        case4: { title: '工程塑料零件', desc: '消费电子产品用PEEK精密零件' },
        case5: { title: '铜合金组件', desc: '电子连接器用黄铜精密零件' },
      },
      note: '更多案例请联系我们获取，我们可根据您的需求提供定制化加工服务',
    },

    // Contact
    contact: {
      title: '联系我们',
      description: '期待与您合作，为您提供专业的精密加工服务',
      company: { label: '公司名称', name: '深圳市致以科技有限公司', en: 'Shenzhen Zhiyi Technology Co., Ltd' },
      contact: { label: '联系人', name: '石华凤', en: 'Shi Huafeng' },
      phone: { label: '电话', value: '+86 177 2756 1686' },
      email: { label: '邮箱', value: 'hanliu210201@163.com' },
      address: {
        label: '地址',
        zh: '深圳市宝安区新桥街道新二社区南岭路23号A101',
        en: 'A101, No23 Nanling Road, Xiner Community, Xinqiao Street',
        en2: 'Baoan District, Shenzhen City, Guangdong Province, China',
      },
    },

    // Footer
    footer: {
      brand: '致以科技',
      slogan: '专业高效 · 专注CNC加工领域',
      features: ['ISO9001认证', '精密零件加工', '快速原型制作'],
      company: '深圳市致以科技有限公司',
      copyright: '© 2024 致以科技. All rights reserved.',
    },
  },

  en: {
    // Header
    header: {
      brand: 'Zhiyi Technology',
      company: 'Shenzhen Zhiyi Technology Co., Ltd',
      nav: {
        home: 'Home',
        about: 'About Us',
        equipment: 'Equipment',
        cases: 'Case Studies',
        contact: 'Contact',
      },
    },

    // Hero
    hero: {
      title: 'Professional & Efficient · Focused on CNC Machining',
      subtitle: 'Quick Response, Quality Assurance, Transparent Pricing, On-Demand Production',
      features: {
        iso: 'ISO9001 Certified',
        quote: '24-Hour Quote',
        precision: 'Precision Machining',
      },
      cta: {
        consult: 'Contact Us',
        learn: 'Learn More',
      },
      experience: 'Years of Experience',
    },

    // About
    about: {
      title: 'About Zhiyi Technology',
      description: 'Shenzhen Zhiyi Technology Co., Ltd is an ISO9001 certified professional CNC machining manufacturer, specializing in precision parts machining, rapid prototyping, and small batch production services.',
      values: {
        quick: {
          title: 'Quick Response',
          desc: '24-Hour Quick Quote',
          detail: 'Professional team responds quickly to customer needs',
        },
        quality: {
          title: 'Quality Assurance',
          desc: 'ISO9001 Certified',
          detail: 'Strict quality management system ensures product quality',
        },
        price: {
          title: 'Transparent Pricing',
          desc: 'Cost Controlled',
          detail: 'Reasonable prices with no hidden fees',
        },
        custom: {
          title: 'On-Demand Production',
          desc: 'Meeting Personalized Needs',
          detail: 'Flexible production solutions for different order requirements',
        },
      },
      advantages: 'Our Advantages',
      advantagesDesc: 'We have an experienced technical team and advanced production equipment, capable of providing customers with one-stop precision machining services from design to production. Whether prototyping or mass production, we meet various customer needs with strict quality control and efficient delivery capabilities.',
      features: {
        experience: '8+ Years of Industry Experience',
        iso: 'ISO9001 Quality Certification',
        workshop: '4000m² Modern Workshop',
        equipment: 'Multiple Advanced CNC Machines',
      },
      workshopAlt: 'Zhiyi Technology Workshop',
    },

    // Equipment
    equipment: {
      title: 'Advanced Processing Equipment',
      description: 'Equipped with multiple international advanced processing equipment to provide customers with high-quality precision machining services',
      items: {
        aluminum: { title: 'Aluminum Machining Center', desc: 'Professional aluminum alloy precision processing equipment' },
        steel: { title: 'Steel Machining Center', desc: 'High-strength steel processing solutions' },
        lathe: { title: 'CNC Lathe', desc: 'High-precision turning equipment' },
        fiveAxis: { title: '5-Axis Machining Center', desc: 'Complex parts 5-axis simultaneous machining' },
        cmm: { title: 'CMM', desc: 'Precision inspection and quality assurance' },
        other: { title: 'Other Precision Equipment', desc: 'Diversified processing capabilities' },
      },
    },

    // Capabilities
    capabilities: {
      title: 'We Can Process Various Materials',
      description: 'Rich material processing experience to meet precision machining needs of different industries and applications',
      materials: {
        title: 'Processable Materials',
        aluminum: { name: 'Aluminum Alloy', types: '6061 / 7075 / 5052' },
        stainless: { name: 'Stainless Steel', types: '303 / 304 / 316 / 416 / 420' },
        steel: { name: 'Steel', types: '12L14 / 1215 / 1018 / 4140' },
        copper: { name: 'Copper Alloy', types: 'Brass / Bronze / Copper' },
        plastic: { name: 'Engineering Plastic', types: 'PEEK / ABS / Nylon / Polycarbonate' },
        titanium: { name: 'Titanium Alloy', types: 'Gr2 / Gr5 / TC4' },
      },
      processing: {
        title: 'Processing Capabilities',
        tolerance: { title: 'Machining Precision', value: '±0.01mm', desc: 'Precision machining with strict quality control' },
        surface: { title: 'Surface Treatment', treatments: ['Anodizing', 'Plating', 'Spraying', 'Polishing', 'Passivation'] },
        maxSize: { title: 'Max Processing Size', value: '1500×800×500', unit: 'mm (L×W×H)' },
      },
    },

    // Advantages
    advantages: {
      title: 'Our Service Advantages',
      description: 'Professional team, advanced equipment, strict quality management, providing comprehensive precision machining services for customers',
      items: {
        oneOnOne: { title: 'One-on-One Service', desc: 'Dedicated account manager follows up throughout, providing personalized service solutions' },
        quickQuote: { title: '24-Hour Quick Quote', desc: 'Professional team responds quickly with detailed quotes within 24 hours' },
        precision: { title: 'Precision Tolerance', desc: 'Precision equipment ensures product tolerance accurate to ±0.01mm' },
        quality: { title: 'Strict Quality Control', desc: 'ISO9001 quality system with multiple strict quality inspections' },
        delivery: { title: 'On-Time Delivery', desc: 'Scientific production planning ensures on-time delivery commitments' },
        support: { title: 'Worry-Free Support', desc: 'Comprehensive after-sales service system, always ready to respond to customer needs' },
      },
      slogan: 'Choose Zhiyi Technology, Choose Quality Assurance',
      sloganDesc: 'We are committed to providing the highest quality precision machining services for every customer, from design to delivery, worry-free throughout',
    },

    // Industries
    industries: {
      title: 'Our Products Are Widely Used in Various Industries',
      description: 'With rich industry experience and excellent processing capabilities, we provide high-quality precision parts for customers in various industries',
      items: {
        auto: {
          title: 'Automotive Industry',
          desc: 'Providing high-precision component processing services for the automotive industry',
          applications: ['Engine Components', 'Transmission Parts', 'Chassis Components', 'Interior Parts'],
        },
        aerospace: {
          title: 'Aerospace',
          desc: 'Meeting high-standard processing requirements in the aerospace field',
          applications: ['Aircraft Structural Parts', 'Engine Components', 'Precision Connectors', 'Test Equipment Parts'],
        },
        medical: {
          title: 'Medical Devices',
          desc: 'Complying with strict quality standards in the medical device industry',
          applications: ['Surgical Instruments', 'Diagnostic Equipment Parts', 'Implant Components', 'Medical Housings'],
        },
        electronics: {
          title: 'Consumer Electronics',
          desc: 'Providing precision parts processing for consumer electronics products',
          applications: ['Phone Housings', 'Heat Dissipation Components', 'Connectors', 'Precision Structural Parts'],
        },
      },
    },

    // Case Studies
    cases: {
      title: 'Machining Case Studies',
      description: 'Exquisite machining craftsmanship, providing high-quality precision parts for customers in various industries',
      items: {
        case1: { title: 'Precision Aluminum Parts', desc: 'High-precision aluminum alloy components for automotive industry' },
        case2: { title: 'Stainless Steel Complex Structures', desc: 'Stainless steel precision parts for medical devices' },
        case3: { title: '5-Axis Machined Parts', desc: 'Complex geometric parts for aerospace applications' },
        case4: { title: 'Engineering Plastic Parts', desc: 'PEEK precision parts for consumer electronics' },
        case5: { title: 'Copper Alloy Components', desc: 'Brass precision parts for electronic connectors' },
      },
      note: 'Contact us for more case studies. We can provide customized processing services according to your needs.',
    },

    // Contact
    contact: {
      title: 'Contact Us',
      description: 'Looking forward to cooperating with you and providing professional precision machining services',
      company: { label: 'Company Name', name: 'Shenzhen Zhiyi Technology Co., Ltd', en: 'Shenzhen Zhiyi Technology Co., Ltd' },
      contact: { label: 'Contact Person', name: 'Shi Huafeng', en: 'Shi Huafeng' },
      phone: { label: 'Phone', value: '+86 177 2756 1686' },
      email: { label: 'Email', value: 'hanliu210201@163.com' },
      address: {
        label: 'Address',
        zh: 'A101, No23 Nanling Road, Xiner Community, Xinqiao Street',
        en: 'Baoan District, Shenzhen City, Guangdong Province, China',
        en2: '',
      },
    },

    // Footer
    footer: {
      brand: 'Zhiyi Technology',
      slogan: 'Professional & Efficient · Focused on CNC Machining',
      features: ['ISO9001 Certified', 'Precision Parts', 'Rapid Prototyping'],
      company: 'Shenzhen Zhiyi Technology Co., Ltd',
      copyright: '© 2024 Zhiyi Technology. All rights reserved.',
    },
  },
} as const

export type TranslationKey = keyof typeof translations.zh
