#1. 
(1..10).to_a.each { |n| puts n}


#2.
h = {a:1, b:2, c:3, d:4}
h[:b]
h.merge!(e:5)


#3.
contact_data = [["ana@email.com", "123 Main st.", "555-123-4567"], ["avion@email.com", "404 not Found Dr.", "123-234-3454"]]
contacts = { "Analyn Cajocson" => {}, "Avion School" => {}}

contacts["Analyn Cajocson"] = contact_data[0]
contacts["Avion School"] = contact_data[1]

#4.
def age(value)
  puts "How old are you?"
  puts "In 10 years you will be:\n#{value + 10}"
  puts "In 20 years you will be:\n#{value + 20}"
  puts "In 30 years you will be:\n#{value + 30}"
  puts "In 40 years you will be:\n#{value + 40}"
end
