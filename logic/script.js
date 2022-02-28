// Nav

const Nav = document.querySelector(".Nav")
window.addEventListener('scroll',()=>{
    if(window.scrollY !== 0){
        Nav.classList.add("active")

    }
    else{
        Nav.classList.remove("active")
    }
    
});



// slider

const places = [
    {
        id:0,
        place:"Bangkok",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, voluptates impedit quas ipsum nam sequi ea earum. Rem eum pariatur dolor excepturi quod, incidunt ratione. Quas nobis atque voluptatem voluptate!
        Libero, beatae? Sapiente pariatur eveniet iure rerum, numquam ab culpa tempore, nesciunt deleniti doloribus perferendis! Accusantium iusto quo doloribus reiciendis aliquam enim, adipisci placeat quibusdam voluptates. Corrupti praesentium labore qui!
        Vero consequuntur maxime delectus voluptatem magni voluptatum in, harum libero dolores ea et sapiente id architecto obcaecati quibusdam odit nesciunt commodi non temporibus est consequatur voluptatibus recusandae! Iusto, debitis maiores.
        Quos ducimus vel commodi, eveniet molestiae enim minus aliquam quod magnam porro odio tempore. Aperiam in consectetur, dignissimos nemo, tenetur natus iste, facere ipsum at aut a quas officiis optio!
        Delectus sit veritatis voluptate obcaecati rem eum, animi sequi reprehenderit nam perspiciatis nulla tempore blanditiis minus ducimus iste unde soluta ullam corrupti itaque accusamus eligendi esse tempora facilis? Aliquam, repellat.`,
    },
    {
        id:1,
        place:"Chang Mai",
        description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugiat recusandae voluptates vero explicabo deleniti soluta impedit accusantium fugit neque! Quasi ea nostrum esse, distinctio sed qui quia magnam temporibus?
        Laboriosam cumque assumenda maxime necessitatibus architecto, omnis quod suscipit eligendi quibusdam, ex exercitationem placeat nihil dignissimos quos. Expedita nesciunt, et rerum repellat sint itaque, ipsam modi cum ducimus similique veritatis!
        Error minima explicabo veniam, fugit rerum tempore doloremque natus quam possimus dolorem repellendus distinctio! Iste temporibus, doloremque ullam minima provident aut. Repudiandae incidunt a neque aperiam sunt ad soluta quisquam!`,
    },
    {
        id:2,
        place:"Pattaya",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus voluptatum vero expedita sequi praesentium cupiditate sapiente nemo, impedit assumenda accusantium nisi. Aspernatur nemo ab, deleniti quos nihil illum odit!
        Fuga dignissimos cupiditate porro quod molestias officiis nulla assumenda voluptatem nemo facere reprehenderit saepe modi molestiae necessitatibus reiciendis officia, temporibus praesentium cum nihil perferendis laudantium quos excepturi veritatis. Sunt, praesentium!
        Doloremque culpa cupiditate hic? Delectus iure enim nihil, blanditiis, recusandae dolore laboriosam exercitationem ab iste velit laudantium dolorum cum pariatur omnis at neque. Est quibusdam expedita tenetur consequatur officia earum?
        Ratione aut minima incidunt voluptates placeat soluta suscipit eum adipisci, ut officia enim earum ipsa, nesciunt accusamus praesentium dolorum, dicta libero quaerat ad rem autem? Possimus architecto sequi natus. Perferendis?
        Ratione sit dignissimos maiores nostrum sint veniam atque nihil iste quibusdam reprehenderit voluptatibus neque suscipit vitae iusto, corrupti amet aut ipsum non dolorem perferendis modi perspiciatis! Recusandae saepe nobis maxime.`,
    },
    {
        id:3,
        place:"Phuket",
        description:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odit, harum dolorem consequatur nemo facilis natus nisi. Consequatur autem impedit quos ipsam. Facere, voluptatibus reiciendis praesentium esse repellendus nihil porro!
        Eum, et nobis deserunt animi earum dolore quasi veritatis doloribus facilis. Architecto voluptates facere impedit illum officia numquam fugit dignissimos repellendus ipsam, aliquid quis blanditiis quidem aspernatur iste. Fugiat, molestiae.
        Error nulla aspernatur modi a dignissimos dolore iusto voluptas soluta praesentium dolorem est labore unde facere voluptates, suscipit beatae enim quos similique ipsam fugiat voluptate? Dignissimos laudantium asperiores provident. Qui?
        In dolor molestiae temporibus itaque quod esse. Error molestiae nulla ipsa deserunt recusandae minus eaque consectetur quae corporis? Aut excepturi magnam quam esse fuga pariatur ducimus dolorum atque ipsum rem.
        Dolore maxime cum aut officia eveniet cumque reiciendis officiis minus iure harum. Accusantium, iusto blanditiis reiciendis nemo libero magnam similique fuga possimus dolorum explicabo quaerat et eius tempore! Dignissimos, incidunt.
      `,
    },
    {
        id:4,
        place:"Koh Chang",
        description:`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem unde doloribus earum excepturi eligendi ipsa similique nulla alias est quis inventore maiores quasi eos fugit ipsam illum itaque, pariatur et!
        Quia magnam, voluptates placeat earum laudantium rerum accusantium omnis aperiam ipsa exercitationem deserunt autem. Voluptatibus ipsa aut maxime eos, amet debitis, deserunt molestiae illo obcaecati suscipit dicta id, quod distinctio?
        Vero laborum est reiciendis, aliquid velit tempore nesciunt aspernatur accusantium dicta unde laudantium a, ex voluptates illum alias fugiat itaque dolore blanditiis nam? Minima dolor laudantium nesciunt iure? Dolorum, sequi!
        Ullam architecto tempore sequi distinctio, tempora ducimus accusantium deserunt provident expedita harum doloribus nobis earum, suscipit ipsam aliquid amet fuga placeat! Recusandae voluptas ullam magni placeat quia suscipit possimus voluptates.`,
    },
    {
        id:5,
        place:"Kanchanaburi",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias voluptate ullam reprehenderit iure nulla doloremque quo dolores cumque earum vero ab sint cupiditate natus hic, dicta, vel illo nemo.
        Molestiae veniam illo aperiam, reprehenderit porro atque id veritatis officiis magni sint unde temporibus, minima dicta explicabo magnam non qui fugit laudantium suscipit! Assumenda placeat ex expedita ullam? Assumenda, enim!
        Ea quidem, non quod, ad laboriosam iste mollitia nesciunt, deserunt natus ut tenetur a? Quae rem, deleniti veniam dolorem, perspiciatis veritatis eveniet doloribus dignissimos nostrum magnam a aliquam omnis repudiandae?`,
    },
    {
        id:6,
        place:"Koh Samui",
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid molestias voluptate ullam reprehenderit iure nulla doloremque quo dolores cumque earum vero ab sint cupiditate natus hic, dicta, vel illo nemo.
        Molestiae veniam illo aperiam, reprehenderit porro atque id veritatis officiis magni sint unde temporibus, minima dicta explicabo magnam non qui fugit laudantium suscipit! Assumenda placeat ex expedita ullam? Assumenda, enim!
        Ea quidem, non quod, ad laboriosam iste mollitia nesciunt, deserunt natus ut tenetur a? Quae rem, deleniti veniam dolorem, perspiciatis veritatis eveniet doloribus dignissimos nostrum magnam a aliquam omnis repudiandae?`,
    }
]

const sliderIMG = document.querySelector(".Header__sliderIMG");
const place = document.querySelector(".Header__Section__h1");
const paragraph = document.querySelector(".Header__Section__p");
const sliderList = document.querySelectorAll(".slider-list");


let index = 0;
const slider = () =>{
    

    sliderIMG.src = `styles/images/slider${index}.jpg`;
    place.textContent = places[index].place;
    paragraph.textContent = places[index].description;
    if(index>0){
        sliderList[index-1].style.backgroundColor = "transparent";
        
    }
    if(index===0){
        sliderList.forEach(e=>{e.style.backgroundColor = "transparent"})
    }
    sliderList[index].style.backgroundColor = "#B07590";
   
   
    ++index
   
    if(index>places.length-1){
        // sliderList.forEach(e=>{e.style.backgroundColor = "transparent"})
        index = 0;
        
        // sliderList.forEach(e=>{e.style.backgroundColor = "transparent"})
    }

    
}
slider()
setInterval(slider, 8000);
