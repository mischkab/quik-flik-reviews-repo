Movie.destroy_all
Review.destroy_all

Movie.create!([
  {
    title: "The Godfather",
    overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    director: "Francis Ford Coppola",
    image: "http://www.impawards.com/1972/posters/godfather_ver3.jpg"
  },
  {
    title: "The Shawshank Redemption",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    director: "Frank Darabont",
    image: "http://www.impawards.com/1994/posters/shawshank_redemption_ver1.jpg"
  },
  {
    title: "The Green Mile",
    overview: "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
    director: "Frank Darabont",
    image: "http://www.impawards.com/1999/posters/green_mile_ver3.jpg"
  },
  {
    title: "Whiplash",
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    director: "Damien Chazelle",
    image: "http://www.impawards.com/2014/posters/whiplash_ver3.jpg"
  }
])

10.times{User.create!(username: Faker::Internet.username(specifier: 5..10), password: Faker::Internet.password(min_length: 8), email: Faker::Internet.email)}

Review.create!([
  {
    title: "You're not a movie buff if you haven't watched this!",
    comment: "If anyone tries to tell you that they're a movie buff but they've never seen the Godfather, they're lying! And if they say it's bad then they haven't watched it! Period.",
    rating: 5,
    movie:Movie.all.sample,
    user:User.all.sample
  },
  {
    title: "This movie is the G.O.A.T",
    comment: "They've all tried but they can't succeed. This movie is by far the G.O.A.T when it comes to acting.",
    rating: 5,
    movie:Movie.all.sample,
    user:User.all.sample
  },
  {
    title: "I don't understand the hype",
    comment: "Don't get me wrong, this movie is good but it's not great. I was a little underwhelmed after reading the reviews and hearing people always quote it.",
    rating: 3,
    movie:Movie.all.sample,
    user:User.all.sample
  },
  {
    title: "The next Brad Pitt. You heard it here first",
    comment: "Picked this movie randomly on my long haul flight and I was pleasantly surprised. I have only ever seen Miles Teller in teen movies like the Fault in Our Starts but he's even better in serious roles!",
    rating: 5,
    movie:Movie.all.sample,
    user:User.all.sample
  }
])