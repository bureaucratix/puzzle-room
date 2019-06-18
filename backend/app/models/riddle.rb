class Riddle < ApplicationRecord

    def self.generate 
        riddleArray = Riddle.all
        riddle = riddleArray.sample
        question = riddle.question.split('\n').join(' ')
        answer = riddle.answer
         return riddle, answer
    end 



end
