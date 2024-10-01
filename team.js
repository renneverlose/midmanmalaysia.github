const teamMembers = [
  {
    name: "Bani Ojan",
    price: "RM 30",
    img: "images/team-1.jpg",
    instagram: "https://wasap.my/60162419670",
    whatsapp: "https://www.instagram.com/baniojan/",
  },
  {
    name: "Kaito",
    price: "RM 20",
    img: "images/team-2.jpg",
    instagram: "https://wasap.my/601139740407",
    whatsapp: "https://www.instagram.com/kaitostoremy",
  },
  {
    name: "Mysagitarius",
    price: "RM 10",
    img: "images/team-3.jpg",
    instagram: "https://wasap.my/601139592094",
    whatsapp: "https://www.instagram.com/mysagitarius.real",
  },
  {
    name: "Milo Gaming",
    price: "RM 20",
    img: "images/team-4.jpg",
    instagram: "https://wasap.my/60163025510",
    whatsapp: "https://www.instagram.com/milogaming.shop/",
  },
  {
    name: "Keyzz Gaming",
    price: "RM 10",
    img: "images/team-5.jpg",
    instagram: "https://wasap.my/601127520595",
    whatsapp: "https://www.instagram.com/keyzgaming.shop/",
  },
  {
    name: "Epol Midman",
    price: "RM 20",
    img: "images/epol.jpg",
    instagram: "https://wasap.my/60137314591",
    whatsapp: "https://www.instagram.com/midman_epol.official",
  },
  {
    name: "Midman Pilo",
    price: "RM 10",
    img: "images/team-7.jpg",
    instagram: "https://wasap.my/601117698698",
    whatsapp: "https://www.instagram.com/midmanpilo",
  },
  {
    name: "Izufraction",
    price: "RM 20",
    img: "images/team-8.jpg",
    instagram: "https://wasap.my/601125770897",
    whatsapp: "https://www.instagram.com/izufraction/",
  },
  {
    name: "Aashop",
    price: "RM 20",
    img: "images/team-9.jpg",
    instagram: "https://wasap.my/601135820048",
    whatsapp: "https://www.instagram.com/aashop24_",
  },
];

const teamRow = document.getElementById("team_row");

teamMembers.forEach((member) => {
  const memberHTML = `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="team-member">
              <div class="member-img">
                <img src="${member.img}" class="img-fluid" alt="">
              </div>
              <div class="member-info">
                <h4>${member.name}</h4>
                <span class="mb-3">${member.price}</span>
                <a href="${member.instagram}"><i class="bi bi-whatsapp"></i></a>
                  <a href="${member.whatsapp}"><i class="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
              `;
  teamRow.innerHTML += memberHTML;
});
