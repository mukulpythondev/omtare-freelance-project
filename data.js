// data.js

const products = [
    { 
        image: 'IMG-20240716-WA0064.jpg', 
        name: 'Wooden Sculpture', 
        material: 'Wood', 
        description: 'A beautifully crafted wooden sculpture.', 
        weight: '1.2kg', 
        articleNumber: 'ART-001' 
    },
    { 
        image: 'IMG-20240716-WA0065.jpg', 
        name: 'Metal Figure', 
        material: 'Metal', 
        description: 'A durable and strong metal figure.', 
        weight: '3.5kg', 
        articleNumber: 'ART-002' 
    },
    { 
        image: 'IMG-20240716-WA0066.jpg', 
        name: 'Ceramic Pot', 
        material: 'Ceramic', 
        description: 'A hand-painted ceramic pot.', 
        weight: '0.8kg', 
        articleNumber: 'ART-003' 
    },
    { 
        image: 'IMG-20240716-WA0067.jpg', 
        name: 'Glass Vase', 
        material: 'Glass', 
        description: 'An elegant glass vase for decoration.', 
        weight: '1.0kg', 
        articleNumber: 'ART-004' 
    },
    { 
        image: 'IMG-20240716-WA0068.jpg', 
        name: 'Bronze Statue', 
        material: 'Bronze', 
        description: 'A small bronze statue with intricate details.', 
        weight: '2.1kg', 
        articleNumber: 'ART-005' 
    },
    { 
        image: 'IMG-20240716-WA0069.jpg', 
        name: 'Clay Model', 
        material: 'Clay', 
        description: 'A sculpted clay model with artistic curves.', 
        weight: '1.5kg', 
        articleNumber: 'ART-006' 
    },
    { 
        image: 'IMG-20240716-WA0070.jpg', 
        name: 'Marble Carving', 
        material: 'Marble', 
        description: 'A marble carving with a smooth finish.', 
        weight: '2.8kg', 
        articleNumber: 'ART-007' 
    },
    { 
        image: 'IMG-20240716-WA0071.jpg', 
        name: 'Stone Artifact', 
        material: 'Stone', 
        description: 'A handcrafted stone artifact.', 
        weight: '3.0kg', 
        articleNumber: 'ART-008' 
    },
    { 
        image: 'IMG-20240716-WA0072.jpg', 
        name: 'Silver Pendant', 
        material: 'Silver', 
        description: 'A delicate silver pendant.', 
        weight: '0.2kg', 
        articleNumber: 'ART-009' 
    },
    { 
        image: 'IMG-20240716-WA0073.jpg', 
        name: 'Gold Necklace', 
        material: 'Gold', 
        description: 'A gold necklace with precious stones.', 
        weight: '0.5kg', 
        articleNumber: 'ART-010' 
    },
    { 
        image: 'IMG-20240716-WA0074.jpg', 
        name: 'Iron Figurine', 
        material: 'Iron', 
        description: 'A figurine made from iron, durable and stylish.', 
        weight: '4.5kg', 
        articleNumber: 'ART-011' 
    },
    { 
        image: 'IMG-20240716-WA0076.jpg', 
        name: 'Brass Bowl', 
        material: 'Brass', 
        description: 'A handcrafted brass bowl.', 
        weight: '1.4kg', 
        articleNumber: 'ART-012' 
    },
    { 
        image: 'IMG-20240716-WA0077.jpg', 
        name: 'Porcelain Doll', 
        material: 'Porcelain', 
        description: 'A delicate porcelain doll with intricate designs.', 
        weight: '0.7kg', 
        articleNumber: 'ART-013' 
    },
    { 
        image: 'IMG-20240716-WA0078.jpg', 
        name: 'Leather Bag', 
        material: 'Leather', 
        description: 'A premium leather bag with stylish finish.', 
        weight: '0.9kg', 
        articleNumber: 'ART-014' 
    },
    { 
        image: 'IMG-20240716-WA0079.jpg', 
        name: 'Copper Plate', 
        material: 'Copper', 
        description: 'A traditional copper plate with carvings.', 
        weight: '0.6kg', 
        articleNumber: 'ART-015' 
    },
    { 
        image: 'IMG-20240716-WA0082.jpg', 
        name: 'Resin Figurine', 
        material: 'Resin', 
        description: 'A resin figurine with a polished surface.', 
        weight: '0.8kg', 
        articleNumber: 'ART-016' 
    },
    { 
        image: 'IMG-20240716-WA0084.jpg', 
        name: 'Crystal Sculpture', 
        material: 'Crystal', 
        description: 'A crystal sculpture reflecting light beautifully.', 
        weight: '0.6kg', 
        articleNumber: 'ART-017' 
    },
    { 
        image: 'IMG-20240716-WA0085.jpg', 
        name: 'Platinum Ring', 
        material: 'Platinum', 
        description: 'A shiny platinum ring with a minimalist design.', 
        weight: '0.03kg', 
        articleNumber: 'ART-018' 
    },
    { 
        image: 'IMG-20240716-WA0087.jpg', 
        name: 'Pewter Goblet', 
        material: 'Pewter', 
        description: 'A goblet made from polished pewter.', 
        weight: '1.0kg', 
        articleNumber: 'ART-019' 
    },
    { 
        image: 'IMG-20240716-WA0088.jpg', 
        name: 'Aluminum Statue', 
        material: 'Aluminum', 
        description: 'A lightweight aluminum statue.', 
        weight: '1.2kg', 
        articleNumber: 'ART-020' 
    },
    { 
        image: 'IMG-20240716-WA0089.jpg', 
        name: 'Polymer Model', 
        material: 'Polymer', 
        description: 'A modern polymer-based model.', 
        weight: '0.5kg', 
        articleNumber: 'ART-021' 
    },
    { 
        image: 'IMG-20240716-WA0090.jpg', 
        name: 'Enamel Bowl', 
        material: 'Enamel', 
        description: 'An enamel bowl with bright patterns.', 
        weight: '0.4kg', 
        articleNumber: 'ART-022' 
    },
    { 
        image: 'IMG-20240716-WA0091.jpg', 
        name: 'Limestone Statue', 
        material: 'Limestone', 
        description: 'A strong statue made from limestone.', 
        weight: '2.3kg', 
        articleNumber: 'ART-023' 
    },
    { 
        image: 'IMG-20240716-WA0092.jpg', 
        name: 'Granite Block', 
        material: 'Granite', 
        description: 'A carved granite block with intricate designs.', 
        weight: '4.0kg', 
        articleNumber: 'ART-024' 
    },
    { 
        image: 'IMG-20240716-WA0094.jpg', 
        name: 'Tapestry', 
        material: 'Textile', 
        description: 'A woven tapestry with colorful designs.', 
        weight: '0.3kg', 
        articleNumber: 'ART-025' 
    },
    { 
        image: 'IMG-20240716-WA0095.jpg', 
        name: 'Velvet Pillow', 
        material: 'Velvet', 
        description: 'A luxurious velvet pillow.', 
        weight: '0.7kg', 
        articleNumber: 'ART-026' 
    },
    { 
        image: 'IMG-20240716-WA0097.jpg', 
        name: 'Gold Coin', 
        material: 'Gold', 
        description: 'An antique gold coin.', 
        weight: '0.02kg', 
        articleNumber: 'ART-027' 
    },
    { 
        image: 'IMG-20240716-WA0100.jpg', 
        name: 'Silver Coin', 
        material: 'Silver', 
        description: 'An ancient silver coin.', 
        weight: '0.02kg', 
        articleNumber: 'ART-028' 
    },
    { 
        image: 'IMG-20240716-WA0101.jpg', 
        name: 'Turquoise Bracelet', 
        material: 'Turquoise', 
        description: 'A bracelet made from turquoise stones.', 
        weight: '0.1kg', 
        articleNumber: 'ART-029' 
    },
    { 
        image: 'IMG-20240716-WA0102.jpg', 
        name: 'Ivory Carving', 
        material: 'Ivory', 
        description: 'A carved ivory sculpture.', 
        weight: '1.1kg', 
        articleNumber: 'ART-030' 
    },
    { 
        image: 'IMG-20240716-WA0103.jpg', 
        name: 'Sandstone Idol', 
        material: 'Sandstone', 
        description: 'A sandstone idol with traditional features.', 
        weight: '2.6kg', 
        articleNumber: 'ART-031' 
    },
    { 
        image: 'IMG-20240716-WA0104.jpg', 
        name: 'Onyx Box', 
        material: 'Onyx', 
        description: 'A box made of smooth onyx.', 
        weight: '0.9kg', 
        articleNumber: 'ART-032' 
    },
    { 
        image: 'IMG-20240716-WA0105.jpg', 
        name: 'Jade Figurine', 
        material: 'Jade', 
        description: 'A green jade figurine.', 
        weight: '0.5kg', 
        articleNumber: 'ART-033' 
    },
    { 
        image: 'IMG-20240716-WA0106.jpg', 
        name: 'Obsidian Statue', 
        material: 'Obsidian', 
        description: 'A dark obsidian statue with sharp edges.', 
        weight: '2.1kg', 
        articleNumber: 'ART-034' 
    },
    { 
        image: 'IMG-20240716-WA0107.jpg', 
        name: 'Pearl Necklace', 
        material: 'Pearl', 
        description: 'A string of pearls in an elegant necklace.', 
        weight: '0.04kg', 
        articleNumber: 'ART-035' 
    },
    { 
        image: 'IMG-20240716-WA0108.jpg', 
        name: 'Coral Ring', 
        material: 'Coral', 
        description: 'A ring made from red coral.', 
        weight: '0.03kg', 
        articleNumber: 'ART-036' 
    }
];

const weightsImages = products.slice(0, 29); // First 38 products (64 to 101)

// Figures page: Images from index 38 onwards (102 to 108)
const figuresImages = products.slice(29); // Remaining products (102 to 108)

export { products, weightsImages, figuresImages };