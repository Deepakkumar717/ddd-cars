import img01 from "../all-images/helmet/h1.png";
import img02 from "../all-images/helmet/h2.png";
import img03 from "../all-images/helmet/h3.png";
import img04 from "../all-images/helmet/h4.png";
import img05 from "../all-images/helmet/h5.png";
import img06 from "../all-images/helmet/h6.png";
import img07 from  "../all-images/helmet/h7.png";
import img08 from  "../all-images/helmet/h8.png";
import img09 from  "../all-images/helmet/h9.png";
import img10 from  "../all-images/helmet/h10.png";
import img11 from  "../all-images/helmet/h11.png";
import img12 from  "../all-images/helmet/h12.png";
import img13 from "../all-images/helmet/h13.png";
import img14 from  "../all-images/helmet/h14.png";
import img15 from  "../all-images/helmet/h15.png";
import img16 from "../all-images/helmet/h16.png";
import img17 from "../all-images/helmet/h17.png";
import img18 from "../all-images/helmet/h18.png";
import img19 from "../all-images/helmet/h19.png";
import img20 from "../all-images/helmet/h20.png";

const storeData = [
  {
    id: 1,
    name: 'Shoei RF-1400',
    brand: 'Shoei',
    price: 3500,
    imgUrl: img01 ,
    model: 'RF-1400',
    weight: 1500, // in grams
    material: 'Polycarbonate',
    safetyRating: 'IS 4151',
    description: 'The Shoei RF-1400 is a top-tier full-face motorcycle helmet known for its superior aerodynamics, comfort, and safety features. It offers a compact, lightweight design with advanced ventilation and noise reduction. The helmet is built with a multi-layered EPS liner for enhanced impact absorption and includes a Pinlock EVO lens for fog-free vision'
  },
  {
    id: 2,
    name: 'Arai Corsair-X',
    brand: 'Arai',
    price: 4500,
    imgUrl: img02 ,
    model: 'Corsair-X',
    weight: 1400, // in grams
    material: 'Fiberglass',
    safetyRating: 'ECE 22.05',
    description: 'The Arai Corsair-X is a premium full-face motorcycle helmet favored by professional riders. It features a complex laminate construction (CLC) shell for exceptional strength and flexibility. The helmets ventilation system is highly efficient, and the interior is customizable for a precise fit. It also includes a VAS (Variable Axis System) shield for improved aerodynamics.'
  },
  {
    id: 3,
    name: 'Bell Moto-9S Flex',
    brand: 'Bell',
    price: 5000,
    imgUrl: img03 ,
    model: 'Moto-9S Flex',
    weight: 1350, // in grams
    material: 'Carbon Fiber',
    safetyRating: 'DOT Certified',
    description: 'A premium helmet made from carbon fiber, offering high durability and a sleek design.'
  },
  {
    id: 4,
    name: 'Akrapovič Slip-On Line',
    brand: 'Akrapovič',
    price: 3200,
    imgUrl: img04,
    model: 'Slip-On Line (Titanium)',
    weight: 1600, // in grams
    material: 'ABS',
    safetyRating: 'IS 4151',
    description: 'The Akrapovič Slip-On Line is a high-quality exhaust system designed for sportbikes. Made from lightweight titanium, it offers significant weight reduction, improved performance, and a deeper, sportier exhaust note. The slip-on design makes it easy to install, and it enhances both the aesthetics and sound of the motorcycle..'
  },
  {
    id: 5,
    name: 'PowerTRONIC V4',
    brand: 'PowerTRONIC',
    price: 3800,
    imgUrl: img05 ,
    model: 'V4',
    weight: 1450, // in grams
    material: 'Fiberglass',
    safetyRating: 'ECE 22.05',
    description: 'The PowerTRONIC V4 is a high-performance piggyback ECU (Engine Control Unit) designed for motorcycles. It offers precise control over fuel and ignition, enhancing the bikes power delivery and throttle response.'
  },
  {
    id: 6,
    name: 'Termignoni GP2',
    brand: 'Termignoni',
    price: 4100,
    imgUrl: img06 ,
    model: 'GP2',
    weight: 1300, // in grams
    material: 'Polycarbonate',
    safetyRating: 'IS 4151',
    description: 'The Termignoni GP2 exhaust is designed for racing and high-performance motorcycles, offering a lightweight and compact solution that improves both power and sound.'
  },
  {
    id: 7,
    name: 'Alpinestars GP Pro R3',
    brand: 'Alpinestars',
    price: 4600,
    imgUrl:img07 ,
    model: 'GP Pro R3',
    weight: 1550, // in grams
    material: 'Carbon Fiber',
    safetyRating: 'DOT Certified',
    description: 'The Alpinestars GP Pro R3 gloves are premium racing gloves designed for maximum protection and comfort. Constructed with a mix of kangaroo leather and cowhide, they feature extensive Kevlar reinforcements, hard knuckle protection, and a third/fourth finger bridge to prevent finger roll separation during impacts.'
  },
  {
    id: 8,
    name: 'Alferno Sleve RF 220',
    brand: 'Alferno',
    price: 3400,
    imgUrl:img08 ,
    model: 'RF 220',
    weight: 1650, // in grams
    material: 'ABS',
    safetyRating: 'IS 4151',
    description: 'Compression sleeves are designed to improve blood circulation and reduce muscle fatigue.'
  },
  {
    id: 9,
    name: 'Dainese Full Metal 6',
    brand: 'Dainese',
    price: 5200,
    imgUrl: img09 ,
    model: 'Full Metal 6',
    weight: 1200, // in grams
    material: 'Polycarbonate',
    safetyRating: 'ECE 22.05',
    description: ' The Dainese Full Metal 6 gloves are high-performance racing gloves made from premium materials like goatskin leather, carbon fiber, and titanium.'
  },
  {
    id: 10,
    name: 'Alpinestars GP Plus R V3',
    brand: 'Alpinestars',
    price: 4800,
    imgUrl: img10 ,
    model: 'GP Plus R V3',
    weight: 1400, 
    material: 'Fiberglass',
    safetyRating: 'DOT Certified',
    description: 'The Alpinestars GP Plus R V3 is a high-performance sport riding jacket made from premium 1.3mm bovine leather for excellent abrasion resistance.'
  },
  {
    id: 11,
    name: 'Dainese Super Speed 3',
    brand: 'Dainese',
    price: 3600,
    imgUrl: img11,
    model: 'Super Speed 3',
    weight: 1500, // in grams
    material: 'Polycarbonate',
    safetyRating: 'IS 4151',
    description: 'The Dainese Super Speed 3 is a premium leather jacket tailored for sport and track riders. It features high-quality Tutu leather construction with S1 bielastic fabric for comfort and mobility.'
  },
  {
    id: 12,
    name: 'REV IT! Ignition 3',
    brand: 'REV IT!',
    price: 4700,
    imgUrl: img12,
    model: 'Ignition 3',
    weight: 1400, // in grams
    material: 'Fiberglass',
    safetyRating: 'ECE 22.05',
    description: 'The REV IT! Ignition 3 jacket is a versatile, all-season jacket combining leather and textile materials for durability and comfort.'
  },
  {
    id: 13,
    name: 'Alpinestars SMX-6 V2',
    brand: 'Alpinestars',
    price: 5200,
    imgUrl: img13,
    model: 'SMX-6 V2',
    weight: 1350, // in grams
    material: 'Carbon Fiber',
    safetyRating: 'DOT Certified',
    description: 'The Alpinestars SMX-6 V2 boots are high-performance sport riding boots designed for both street and track use.'
  },
  {
    id: 14,
    name: 'Dainese Torque 3 Out',
    brand: 'Dainese',
    price: 3100,
    imgUrl: img14,
    model: 'Torque 3 Out',
    weight: 1600, // in grams
    material: 'ABS',
    safetyRating: 'IS 4151',
    description: 'The Dainese Torque 3 Out boots are premium racing boots designed for maximum protection and performance.'
  },
  {
    id: 15,
    name: 'Motul Chain Lube Road',
    brand: 'Motul Chain',
    price: 3900,
    imgUrl: img15,
    model: 'REF 122',
    weight: 1450, // in grams
    material: 'Fiberglass',
    safetyRating: 'ECE 22.05',
    description: 'The Motul Chain Lube Road is designed for road motorcycles and offers excellent lubrication and protection for chains.'
  },
  {
    id: 16,
    name: 'Rizoma Leggera LED Turn Signal',
    brand: 'Rizoma',
    price: 4300,
    imgUrl: img16,
    model: 'Leggera',
    weight: 1300, // in grams
    material: 'Polycarbonate',
    safetyRating: 'IS 4151',
    description: 'The Rizoma Leggera LED turn signal indicators are sleek and stylish, offering a modern look for any motorcycle.'
  },
  {
    id: 17,
    name: 'Brembo Serie Oro Carbon Ceramic disc Pads',
    brand: 'Brembo',
    price: 4600,
    imgUrl: img17,
    model: 'Cermic 16',
    weight: 1550, // in grams
    material: 'Carbon Fiber',
    safetyRating: 'DOT Certified',
    description: 'Brembo Serie Oro Carbon Ceramic Brake Pads offer superior braking performance with their carbon-ceramic compound.'
  },
  {
    id: 18,
    name: 'EBC Double-H Sintered Brake Pads',
    brand: 'EBC',
    price: 3300,
    imgUrl: img18,
    model: 'Double-H',
    weight: 1650, // in grams
    material: 'ABS',
    safetyRating: 'IS 4151',
    description: 'The EBC Double-H Sintered Brake Pads are known for their high performance and durability.'
  },
  {
    id: 19,
    name: 'Vein Strong Chain V9',
    brand: 'Vein Strong',
    price: 5400,
    imgUrl: img19,
    model: 'V9',
    weight: 1200, // in grams
    material: 'Stainless steel',
    safetyRating: 'ECE 22.05',
    description: 'A high-performance, heavy-duty chain designed for both street and off-road motorcycles. It features an O-ring design that enhances sealing and lubrication'
  },
  {
    id: 20,
    name: 'Motul Chain Lube Road',
    brand: 'Motul',
    price: 4900,
    imgUrl: img20,
    model: 'Chain Lube Road',
    weight: 1400, // in grams
    material: 'Fiberglass',
    safetyRating: 'DOT Certified',
    description: 'Motul Chain Lube Road is designed for road motorcycles, providing excellent lubrication and protection.'
  }
];

export default storeData;
