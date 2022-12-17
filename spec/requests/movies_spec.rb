require 'rails_helper'

RSpec.describe "Movies", type: :request do
  before do
    Movie.create(title: 'Finding Nemo', overview: 'A timid clownfish sets out on a journey to bring his son home.', director: 'Andrew Stanton', image: 'http://www.impawards.com/2003/posters/finding_nemo_ver2.jpg')
    Movie.create(title: 'Godzilla vs. Kong', overview: 'The fearsome Godzilla and the mighty Kong--with humanity caught in the balance.', director: 'Adam Wingard', image: 'http://www.impawards.com/2021/posters/godzilla_vs_kong.jpg')
  end

  describe "GET /index" do
    it 'returns an array of all movies' do
      get '/movies'

      expect(response.body).to include_json([
        { id: a_kind_of(Integer), title: 'Finding Nemo', overview: 'A timid clownfish sets out on a journey to bring his son home.', director: 'Andrew Stanton' },
        { id: a_kind_of(Integer), title: 'Godzilla vs. Kong', overview: 'The fearsome Godzilla and the mighty Kong--with humanity caught in the balance.', director: 'Adam Wingard' }
      ])
    end
  end

  describe "GET /movies/:id" do
    it 'returns the first movie' do
      get "/movies/#{Movie.first.id}"

      expect(response.body).to include_json({
        id: a_kind_of(Integer),
        overview: 'A timid clownfish sets out on a journey to bring his son home.',
        title:'Finding Nemo',
        director:'Andrew Stanton'
      })
    end

    it 'returns the second movie' do
      get "/movies/#{Movie.second.id}"

      expect(response.body).to include_json({
        id: a_kind_of(Integer),
        overview: 'The fearsome Godzilla and the mighty Kong--with humanity caught in the balance.',
        title:'Godzilla vs. Kong',
        director:'Adam Wingard'
      })
    end
  end

  describe "POST /movies" do
    context 'with valid movie params' do
      let!(:movie_params) { { title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg' } }

      it 'creates a new movie' do
        expect { post '/movies', params: movie_params }.to change(Movie, :count).by(1)
      end

      it 'returns the movie data' do
        post '/movies', params: movie_params

        expect(response.body).to include_json({
          id: a_kind_of(Integer),
          title: 'The Lion King', 
          overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', 
          director: 'Rob Minkoff, Roger Allers', 
          image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg'
        })
      end

      it 'returns a status code of 201 (created)' do
        post '/movies', params: movie_params

        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid movie params' do
      let!(:movie_params) { { director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg' } }
      
      it 'does not create a new movie' do
        expect { post '/movies', params: movie_params }.to change(Movie, :count).by(0)
      end
  
      it "returns the error message 'Title can't be blank, Overview can't be blank'" do
        post '/movies', params: movie_params
  
        expect(response.body).to include_json({
          error: ["Title can't be blank", "Overview can't be blank"]
        })
      end
  
      it 'returns a status code of 422 (Unprocessable Entity)' do
        post '/movies', params: movie_params
  
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe "PATCH /movies/:id" do
    context 'with valid movie params' do
      it 'updates the movie with the matching id' do
        movie = Movie.create(title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg')

        patch "/movies/#{movie.id}", params: { overview: 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.' }
      
        expect(movie.reload.overview).to eq('As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.')
      end

      it 'returns the movie data' do
        movie = Movie.create(title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg')

        patch "/movies/#{movie.id}", params: { overview: 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.' }

        expect(response.body).to include_json({
          id: a_kind_of(Integer),
          title: 'The Lion King',
          overview: 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.',
          director: 'Rob Minkoff, Roger Allers',
          image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg'
        })
      end
    end

    context 'with invalid movie params' do
      it "does not update the movie with the matching id and returns the error message 'Title can't be blank'" do
        movie = Movie.create(title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg')

        patch "/movies/#{movie.id}", params: { title: '', overview: 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.' }
      
        expect(response.body).to include_json({
          error: ["Title can't be blank"]
        })
      end

      it 'returns a status code of 422 (Unprocessable Entity)' do
        movie = Movie.create(title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg')
        
        patch "/movies/#{movie.id}", params: { title: '', overview: 'As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne.'}
  
        expect(response).to have_http_status(:unprocessable_entity)
      end
    end
  end

  describe 'DELETE /movies/:id' do
    it 'deletes the movie with the matching id' do
      movie = Movie.create(title: 'The Lion King', overview: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.', director: 'Rob Minkoff, Roger Allers', image: 'http://www.impawards.com/1994/posters/lion_king_ver4.jpg')

      expect { delete "/movies/#{movie.id}" }.to change(Movie, :count).from(3).to(2)

      expect(response).to have_http_status(:no_content)
    end
  end
end
