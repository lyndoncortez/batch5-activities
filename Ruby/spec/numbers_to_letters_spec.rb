require './numbers_to_letters'

RSpec.describe NumbersToLetters do
  c = NumbersToLetters.new

  context "int is 1" do
    it 'converts integer to character' do
      expect(c.int_to_char(1)).to eq('A')
    end
  end

  context "int is 20" do
    it 'converts integer to character' do
      expect(c.int_to_char(20)).to eq('T')
    end
  end

  context "int is 26" do
    it 'converts integer to character' do
      expect(c.int_to_char(26)).to eq('Z')
    end
  end

  context "int is 100" do
    it 'converts integer to character' do
      expect(c.int_to_char(100)).to eq('CV')
    end
  end
  
  context "int is 1000" do
    it 'converts integer to character' do
      expect(c.int_to_char(1000)).to eq('ALL')
    end
  end
end