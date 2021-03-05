module PortableDevice

  def battery_level
    @percentage
  end

  def battery_level=(percentage)
    @percentage = percentage
    puts "Battery level set to #{percentage}%"
  end

  def charge
    @percentage += 1
    puts "charging to #{@percentage}%"
  end

  def check_cell_signal
    puts "Searching cell site..."
  end

end

module ComputeDevice

  def boot
    puts "Booting device..."
  end

end



class Computer
  include ComputeDevice
end


class Laptop < Computer
  include PortableDevice
  def battery_level
    @percentage
    puts "Battery level of your Laptop is #{@percentage || "3"}%"
  end
end


class Phone < Laptop
  def battery_level
    @percentage
    puts "Battery level of your phone is #{@percentage || "1"}%"
  end
end



#TEST
myPhone = Phone.new
myPhone.boot
myPhone.battery_level
myPhone.battery_level = 5
myPhone.charge
myPhone.charge
myPhone.charge
myPhone.battery_level
myPhone.check_cell_signal

puts "\n"

macBuko = Laptop.new
macBuko.boot
macBuko.battery_level
macBuko.battery_level = 10
macBuko.charge
macBuko.charge
macBuko.battery_level
macBuko.check_cell_signal

puts "\n"

powerPC = Computer.new
powerPC.boot

