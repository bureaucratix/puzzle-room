# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Riddle.delete_all
Message.delete_all
User.delete_all

alex = User.create(name: "Alex", chess_complete: true)

Message.create(author: "Alex", content: "Hello!", user: alex)

Riddle.create(question:'Voiceless it cries, 
Wingless flutters,
 Toothless bites, 
 Mouthless mutters.', answer:'wind')
Riddle.create(question:'What has roots as nobody sees,
Is taller than trees,
Up, up it goes,
And yet never grows?', answer:'mountain')
Riddle.create(question:'An eye in a blue face
Saw an eye in a green face.
"That eye is like to this eye"
Said the first eye,
"But in low place,
Not in high place."', answer:'sun')
Riddle.create(question:'A box without hinges, key, or lid,
Yet golden treasure inside is hid.', answer:'egg')
Riddle.create(question:'This thing all things devours:
Birds, beasts, trees, flowers;
Gnaws iron, bites steel;
Grinds hard stones to meal;
Slays king, ruins town,
And beats high mountain down.', answer:'time')
Riddle.create(question:'What is in my pocket?', answer:'bike')