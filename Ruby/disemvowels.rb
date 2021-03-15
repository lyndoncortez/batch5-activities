def disemvowel(string)
  string.chars.map {|char| "aeiouAEIOU".include?(char) ? nil : char }.join
end

puts disemvowel("This website is for losers! LOL")