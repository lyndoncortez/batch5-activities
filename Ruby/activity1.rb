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

