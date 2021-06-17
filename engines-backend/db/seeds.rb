tcamry = Car.create(make: 'Toyota', model: 'Camry', year: 2016, trim: 'SE', image_url: 'https://i.imgur.com/t7E8PVc.png')
Review.create(title: 'Great Vehicle', content: 'One of the most reliable cars to be made and still is!', car_id: tcamry.id)
Review.create(title: 'Never a problem!', content: 'This thing has been running for 200k miles and have only been doing basic maintenance!', car_id: tcamry.id)

fmaverick = Car.create(make: 'Ford', model: 'Maverick', year: 2022, trim: 'XL', image_url: 'https://i.imgur.com/JRWPZTU.png')
Review.create(title: 'Upcoming Impossible Truck', content: 'Hybrid that gets 40 mpg city for a truck!', car_id: fmaverick.id)
Review.create(title: 'So is it a Truck or a Car?', content: 'This truck is coming close to a crossover. Not sure if it will be a great utility vehicle for its size but the 40 mpg is promising', car_id: fmaverick.id)
