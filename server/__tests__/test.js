const app = require("../app.js"); 
const supertest = require("supertest");
const request = supertest(app);

//require('dotenv').config()


/*


test to do:
  update user info
  
*/

const userData = {
  "firstName": "McFlan",
  "lastName": "McGee",
  "age": "08-19-1995",
  "gender": "male",
  "preferred_wines": {},
  "preferred_cheese": {},
  "username": "mcmans",
  "password": "123456",
  "email": "testy@email.com"
}

test('try to acquire team members', async () => {
    const response = await request
      .get('/team/getTeamMembers')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('team response ', response.body[0].first_name)
      expect(response.body[0].first_name).toBe('Shane')
  })

  test('try to acquire pairings by wine type', async () => {
    const response = await request
      .get('/wine/getPairing/merlot')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('pairing variety is : ', response.body[0].wine_props[0].variety)
      expect(response.body[0].wine_props[0].variety).toContain('Merlot')
  })

  test('try to acquire pairings by wine barcode', async () => {
    const response = await request
      .get('/wine/getPairing/barcode/089819003471')  // barcode for a Beringer Cab
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('pairing variety is : ', response.body[0].wine_props[0].wine)
      expect(response.body[0].wine_props[0].variety).toContain('Cabernet Sauvignon')
  })

  test('try to acquire pairings by cheese barcode', async () => {
    const response = await request
      .get('/cheese/getPairing/barcode/072830002028')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('pairing cheese is : ', response.body[0].cheese)
      expect(response.body[1].cheese).toContain('Cheddar')
  })

  test('try to acquire pairings by wine type + winery', async () => {
    const response = await request
      .get('/wine/getPairing/Decoy Sauvignon Blanc')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('pairing winery is : ', response.body[0].wine_props[0].winery)
      console.log('pairing variety is : ', response.body[0].wine_props[0].variety)
      expect(response.body[0].wine_props[0].winery).toContain('Decoy')
      expect(response.body[0].wine_props[0].variety).toContain('Sauvignon Blanc')
  })

  test('try to acquire pairings by cheese type', async () => {
    const response = await request
      .get('/cheese/getPairing/gouda')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      console.log('cheese type is : ', response.body[0].cheese)
      console.log('wine type is : ', response.body[0].wine)
      expect(response.body[1].cheese).toContain('Gouda')
  })

  test('try to create a user and retrieve his/her information from the database', async () => {
    
    
    await request  
      .post('/users/create_user')
      .send(userData)
      .expect(201)
      
    }) 

    test('try to login with user info and the update the password and preferences', async () => {
      //test login
      const loginInfo = {
        "username": userData.username,
        "password": userData.password
    }
      await request  
        .post('/users/login')
        .send(loginInfo)
        .expect(202) 
      
        //test update password
        const newPass = {
          "username": userData.username,
          "password": userData.password,
          "new_password": "12345678"
      }
      
        await request  
        .post('/users/updatePassword')
        .send(newPass)
        .expect(202)
       
        //test update preferences
        const newPrefs = {
          "username": userData.username,
          "preferred_wines": {
            "Red": true,
            "White": false
          },
          "preferred_cheeses": {"Hard": true,
            "Semi-Hard": true,
            "Semi-Soft": true,
            "Soft": false}
        }
        await request  
        .post('/users/updateUserPreferences')
        .send(newPrefs)
        .expect(202)

        const user = {
          "username": userData.username
        }

        //test get user preferences
        const response = await request
        .get('/users/getUserPreferences')
        .send(user)
        .expect(200)

        expect(response.body[0].preferred_wines.Red).toBe(true)
        expect(response.body[0].preferred_cheeses.Soft).toBe(false)
        
      }) 

      test('try to update username and email', async () => {
        const newInfo = {
          "newEmail": "mcflans@email.com",
          "newUsername": "mcflansmans",
           "username": userData.username,
          "password": "12345678"
         }

        await request  
          .post('/users/updateUserInfo')
          .send(newInfo)
          .expect(202)
      /*
          const response = await request
             .get('/users/getUsers')
             .expect(200)
             console.log('new user name is :', response.body[0].username)
             
              expect(response.body[0].username).toBe(newInfo.newUsername)
              expect(response.body[0].email).toBe(newInfo.newEmail)*/
          }) 

    test('try to create a pair and upvote it and downvote it', async () => {
      
      const pair = {
        "wine": "California Merlot",
        "cheese": "Abondance",
        "node_id": 69,
        "cheese_id": 11,
        "texture": "Semi-hard",
        "country": "France",
        "animal": "Raw cow's milk"
      }
      await request  
        .post('/pairs/upvote')
        .send(pair)
        .expect(202)

        await request  
        .post('/pairs/downvote')
        .send(pair)
        .expect(202)
     
        const response = await request
        .get('/pairs/getPopularPairings')
        .expect(200)

        // expect(response.body[0].node_id).toBe(69)
        // expect(response.body[0].ratio).toBe(0)
        
      }) 

      test('try to create a saved pair', async () => {
    
      const pair = {
          "user_id": 27,
          "node_id": 69 
        }
        const userid = {
          "user_id": 27
        }
        await request  
          .post('/pairs/createSavedPair')
          .send(pair)
          .expect(201)

        await request
          .post('/pairs/getSavedPairs')
          .send(userid)
          .expect(200)
        }) 

      
