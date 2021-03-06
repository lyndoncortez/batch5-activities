def first_non_repeat_character(string)
  string.chars.find { |character| string.downcase.count(character.downcase) == 1 } || "_" 
end

puts first_non_repeat_character("abaCabad")
puts first_non_repeat_character("abacabaabacaba")