dial_book = {
    "newyork" => "212",
    "newbrunswick" => "732",
    "edison" => "908",
    "plainsboro" => "609",
    "sanfrancisco" => "301",
    "miami" => "305",
    "paloalto" => "650",
    "evanston" => "847",
    "orlando" => "407",
    "lancaster" => "717"
  }

def get_city_names(somehash)
  somehash.each_key { |key| puts key }
end

def get_area_code(somehash, city)
  somehash.each do |key, value|
    puts "The Area Code of #{key} is #{value}" if city.casecmp(key) == 0
  end
end

loop do
  puts "Do you want to choose a city?(y/n)"

  answer = gets.chomp.downcase

  break if answer != "y"
    puts "The available cities are:"
    get_city_names(dial_book)

    puts 'What city would you like to know the area code?'
    city = gets.chomp
    get_area_code(dial_book, city)

end
