class Confection
end

class BananaCake < Confection
  def prepare
    puts "Baking at 350 degrees for 25 minutes"
  end
end


class Cupcake < Confection
  def prepare
    puts "Applying frosting"
  end
end

my_banana_cake = BananaCake.new
my_banana_cake.prepare

my_cupcake = Cupcake.new
my_cupcake.prepare