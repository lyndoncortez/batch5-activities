def find_unique(array)
  puts array.find_all { |e| array.count(e) == 1}
end

puts find_unique([1,1,1,2,1,1])