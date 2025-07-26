module BookKeeping
  VERSION = 4
end

class Complement
  def self.of_dna(strand)
    dnaToRnaMap = {
      G: 'C',
      C: 'G',
      T: 'A',
      A: 'U'
    }

    begin
      strand
        .split('')
        .map { |nucleotide|
          raise ArgumentError if !dnaToRnaMap.has_key?(nucleotide.to_sym)
          dnaToRnaMap[nucleotide.to_sym]
        }
        .join('')
    rescue
      ''
    end
  end
end
