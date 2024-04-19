const reviews = [
    {
      id: 1,
      name: 'COMMANDO',
      job: 'INDIAN ARMY',
      img: 'https://media.licdn.com/dms/image/C4E03AQE1Nd7UtN54jQ/profile-displayphoto-shrink_800_800/0/1609592932215?e=2147483647&v=beta&t=PGJ3FuKei614cj8ZIYbgeNt9qz9CBqnLhk8iJcsTF8k',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'BSF',
      job: 'SSC GD',
      img: 'https://live.staticflickr.com/533/19599008403_1a127dc043_z.jpg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'MAHARASTRA POLICE',
      job: 'STATE GOVERNMENT',
      img: 'https://www.indiandefencereview.com/wp-content/uploads/2012/08/MARCOS.jpg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    
  ];
  // select items
  const img = document.getElementById('person-img');
  const author = document.getElementById('author');
  const job = document.getElementById('job');
  const info = document.getElementById('info');
  
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');
  
  let currentItem = 0;
 
  function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
  nextBtn.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson(currentItem);
  });
  prevBtn.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
  });
  randomBtn.addEventListener('click', function () {
    // console.log('hello');
  
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
  });