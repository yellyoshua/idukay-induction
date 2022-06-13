package sequence

import (
	"math"
	"math/big"
)

func Sequence(index *big.Int) big.Int {
	index.Quo(index, big.NewInt(2))
	index.Add(index, big.NewInt(1))

	return *index
}

func ModSequence(index *big.Int) (big.Int, int64) {
	indexClone := new(big.Int).Set(index)
	var mod big.Int
	mod.Mod(indexClone, big.NewInt(4))
	
	modVal := mod.Int64()
	
	switch modVal {
	case 0:
		indexClone.Add(indexClone, big.NewInt(2))
	case 1:
		indexClone.Add(indexClone, big.NewInt(3))
	case 2:
		indexClone.Add(indexClone, big.NewInt(4))
	case 3:
		indexClone.Add(indexClone, big.NewInt(5))
	}
	indexClone.Div(indexClone, big.NewInt(2))
	
	return *indexClone, modVal
}

func FloatSequence(index float64) (float64, int64) {
	index = index / 2
	index = index + 1
	index = math.Round(index)
	return index, int64(index)
}

func BigFloatSequence(index *big.Float) *big.Float {
	index.Quo(index, big.NewFloat(2))
	index.Add(index, big.NewFloat(1))
	indexFloat, _ := index.Float64()
	return big.NewFloat(math.Round(indexFloat))
}

func main() {
	FloatSequence(545421)
}
