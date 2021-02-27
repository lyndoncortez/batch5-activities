#1
arr = [1, 3, 5, 7, 9, 11]
arr.include?(3)


#2
puts "Give me a number"
number = gets.chomp.to_i
if number <= 50
  puts "It's between 0 and 50"
elsif number > 50 && number <= 100
    puts "It's between 51 and 100"
else puts "It's above 100"
end


#3
text = ""
while text != "STOP"
  puts "What's the magic word?"
  text = gets.chomp
end


#4
arr = [6, 3, 1, 8, 4, 2, 10, 65, 102]
new_array = arr.select { |number| number % 2 == 0 }