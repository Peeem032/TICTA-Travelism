'Rank'

const userBudget = $('input-user').first().json.body.Budget;
const userTransport = $('input-user').first().json.body.Transportation;
const userMore = $('input-user').first().json.body.More.split(' '); // แยกคำใน More เป็น Array

const placesData = [
    {
        "id": "C-001",
        "name": "ตลาดน้ำคลองลัดมะยม",
        "location": "กรุงเทพฯ",
        "type": "ตลาดน้ำ",
        "description": "ตลาดน้ำขนาดใหญ่ใกล้กรุงเทพฯ มีอาหารหลากหลายและสินค้าพื้นเมือง",
        "price_range": {
            "min": 100,
            "max": 500
        },
        "operating_hours": "เสาร์-อาทิตย์ 09:00 - 16:00",
        "activities": ["อาหาร", "ช้อปปิ้ง", "นั่งเรือ", "ชิลล์ๆ"],
        "transportation": ["รถยนต์"],
        "is_open_on_weekend": true
    },
    {
        "id": "C-002",
        "name": "ไอคอนสยาม",
        "location": "กรุงเทพฯ",
        "type": "ห้างสรรพสินค้า",
        "description": "ห้างสรรพสินค้าหรูหราพร้อมวิวแม่น้ำเจ้าพระยา มีโซนอาหารและแหล่งช้อปปิ้งครบครัน",
        "price_range": {
            "min": 500,
            "max": 5000
        },
        "operating_hours": "ทุกวัน 10:00 - 22:00",
        "activities": ["ช้อปปิ้ง", "กินข้าว", "ถ่ายรูป", "ชมวิว"],
        "transportation": ["รถยนต์", "เรือด่วน", "BTS"],
        "is_open_on_weekend": true
    },
    {
        "id": "C-003",
        "name": "สวนรถไฟ (สวนวชิรเบญจทัศ)",
        "location": "กรุงเทพฯ",
        "type": "สวนสาธารณะ",
        "description": "สวนสาธารณะขนาดใหญ่ใจกลางเมือง เหมาะสำหรับการพักผ่อนและออกกำลังกาย",
        "price_range": {
            "min": 0,
            "max": 50
        },
        "operating_hours": "ทุกวัน 05:00 - 21:00",
        "activities": ["พักผ่อน", "ปั่นจักรยาน", "ออกกำลังกาย"],
        "transportation": ["รถยนต์", "รถไฟฟ้า BTS", "MRT"],
        "is_open_on_weekend": true
    },
    {
        "id": "C-004",
        "name": "วัดโพธิ์ (วัดพระเชตุพนวิมลมังคลาราม)",
        "location": "กรุงเทพฯ",
        "type": "วัด",
        "description": "วัดเก่าแก่ที่มีพระนอนองค์ใหญ่ และเป็นต้นกำเนิดของการนวดแผนไทย",
        "price_range": {
            "min": 0,
            "max": 200
        },
        "operating_hours": "ทุกวัน 08:00 - 18:30",
        "activities": ["ไหว้พระ", "ประวัติศาสตร์", "ถ่ายรูป"],
        "transportation": ["รถยนต์", "เรือด่วน", "MRT"],
        "is_open_on_weekend": true
    }
];

// กรองสถานที่ตามเงื่อนไขเบื้องต้น
let filteredPlaces = placesData.filter(place => {
    const isWithinBudget = userBudget >= place.price_range.min;
    const isCorrectTransport = place.transportation.includes(userTransport);
    return isWithinBudget && isCorrectTransport;
});

// ให้คะแนน (Score) ตามคำใน "More"
filteredPlaces.forEach(place => {
    let score = 0;
    userMore.forEach(keyword => {
        if (place.activities.some(activity => activity.includes(keyword))) {
            score += 1; // เพิ่มคะแนนเมื่อเจอ keyword ที่ตรงกัน
        }
        if (place.description.includes(keyword) || place.name.includes(keyword)) {
            score += 0.5; // ให้คะแนนน้อยลงเมื่อเจอใน Description/Name
        }
    });
    place.score = score;
});

// เรียงลำดับจากคะแนนสูงสุดไปต่ำสุด
filteredPlaces.sort((a, b) => b.score - a.score);

return filteredPlaces;