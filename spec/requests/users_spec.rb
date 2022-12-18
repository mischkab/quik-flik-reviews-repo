require 'rails_helper'

RSpec.describe "Users", type: :request do
  describe 'POST /signup' do
    context 'with unique username and password' do
      let!(:user_params) { { username: 'Tokyo', password: 'un1verse', email: 'tokyo@gmail.com' } }
      
      it 'creates a new user' do
        expect { post '/signup', params: user_params }.to change(User, :count).by(1)
      end

      it 'saves the password as password_digest to allow authentication' do
        post '/signup', params: user_params

        expect(User.last.authenticate(user_params[:password])).to eq(User.last)
      end
      
      it 'saves the user id in the session' do
        post '/signup', params: user_params

        expect(session[:user_id]).to eq(User.last.id)
      end
      
      it 'returns the user as JSON' do
        post '/signup', params: user_params

        expect(response.body).to include_json({
          id: User.last.id,
          username: User.last.username
        })
      end

      it 'returns a 201 created response' do
        post '/signup', params: user_params

        expect(response).to have_http_status(:created)
      end

    end

    context 'without unique username or password' do
      let!(:user1) { User.create(username: 'steven', password: 'un1verse', email: 'tokyo@gmail.com') }
      let!(:user2) { User.create(username: 'Tokyo', password: 'M4heswaran', email: 'connie@test.com') }
      let!(:user_params) { { username: 'Tokyo', password: 'un1verse', email: 'tokyo@gmail.com' } }
      
      it 'does not save the user' do
        expect { post '/signup', params: user_params }.not_to change(User, :count)
      end

      it 'returns an error to state username or password has already been taken' do
        post '/signup', params: user_params

        expect(response.body).to include_json({
          error: [
            'Username has already been taken',
            'Email has already been taken'
          ]
        })
      end

      it 'returns a 422 unprocessable entity response' do
        post '/signup', params: user_params

        expect(response).to have_http_status(:unprocessable_entity)
      end
      
    end
  end

  describe 'GET /me' do
    let!(:user1) { User.create(username: 'steven', password: 'un1verse', email: 'steven@outlook.com') }
    let!(:user2) { User.create(username: 'Connie', password: 'M4heswaran', email: 'connie.b@rails.com') }

    it 'returns the first user when the first user is logged in' do
      post '/login', params: { username: user1.username, password: user1.password }
      get '/me'

      expect(response.body).to include_json({ 
        id: user1.id, username: user1.username
      })
    end

    it 'returns the second user when the second user is logged in' do
      post '/login', params: { username: user2.username, password: user2.password }
      get '/me'

      expect(response.body).to include_json({ 
        id: user2.id, username: user2.username
      })
    end

    it 'returns a 401 unauthorized response when no user is logged in' do
      get '/me'

      expect(response).to have_http_status(:unauthorized)
    end
  end
end
