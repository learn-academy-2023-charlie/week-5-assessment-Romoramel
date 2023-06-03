# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

filter_letter_o = 'o'
# Expected output: ['coffee', 'soda water']
filter_letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def letter(words, letter)
    filtered_words = []
    words.each do |word|
      if word.include?(letter)
        filtered_words << word
      end
    end
    filtered_words
  end

# pseudo code
# input: a method that takes in an array of words and a single letter 
# output/return: array of all the words containing that particular letter
# The function takes in a list of words and a single letter. It starts with an empty list called filteredWords to store the words that have the specified letter. It goes through each word in the list of words. It checks each word if the word contains the letter. If the letter is in the word then it adds the word to the filteredWords list. Then the function returns the filtered words list that has the words that have the specified letter.


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def get_sorted_values(hash)
    values = hash.values.flatten
    sorted_values = values.sort
    return sorted_values
  end

# pseudo code
# input: a method that takes in a hash
# output/return: one array with all the hash values at their own index and in alphabetical order. No nested arrays
# the function collects all the values from the hash and puts them in a list. The list is sorted in alphabetical order from A to Z for the result

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
  attr_accessor :model, :wheels, :current_speed

  def initialize(model, wheels = 2)
    @model = model
    @wheels = wheels
    @current_speed = 0
  end

  def bike_info
    "The #{@model} bike has #{@wheels} wheels and is going #{@current_speed} mph."
  end
end

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

my_bike = Bike.new("Trek")
puts my_bike.bike_info

my_bike.pedal_faster(10)
puts my_bike.bike_info

my_bike.pedal_faster(18)
puts my_bike.bike_info

my_bike.brake(5)
puts my_bike.bike_info

my_bike.brake(25)
puts my_bike.bike_info

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

pseudo code
# input: Create a class called Bike that is initialized with a model, wheels, and    current_speed.
# output/return: a sentence with all the data from the bike object.
# The Bike class has three properties: model, wheels, and current_speed. The attr_accessor line is a shortcut in Ruby that automatically creates getter and setter methods for these properties. it let me modify the properties and the initialize method gets called when a new Bike object is created. It takes the parameters model and wheels. wheels has the value of 2. Inside the initialize method I set the initial values for the model, wheels and current_speed properties using instance variables. The Bike class has one behavior called bike_info. This method returns a string that describes the bike's information, including the model, wheels, and current_speed properties. 





