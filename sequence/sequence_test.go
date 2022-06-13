package sequence

import (
	"math/big"
	"testing"
)

type test_sequence_struct struct {
	index *big.Int
	want  *big.Int
}

func TestSequence(t *testing.T) {
	tests := []test_sequence_struct{
		{
			index: big.NewInt(4),
			want:  big.NewInt(3),
		},
		{
			index: big.NewInt(76),
			want:  big.NewInt(39),
		},
		{
			index: big.NewInt(545421),
			want:  big.NewInt(272712),
		},
		{
			index: big.NewInt(50),
			want:  big.NewInt(26),
		},
		{
			index: big.NewInt(25),
			want:  big.NewInt(14),
		},
		{
			index: big.NewInt(87123641123172368),
			want:  big.NewInt(43561820561586185),
		},
		{
			index: big.NewInt(81239812739128371),
			want:  big.NewInt(40619906369564188),
		},
	}

	for _, test := range tests {
		got := Sequence(test.index)
		if got.Cmp(test.want) != 0 {
			t.Errorf("Sequence(%v) = %v, want %v", test.index, got.String(), test.want)
		}
	}
}

type test_sequence_with_round_struct struct {
	index float64
	want  float64
}

func TestFloatSequence(t *testing.T) {
	tests := []test_sequence_with_round_struct{
		{
			index: 4,
			want:  3,
		},
		{
			index: 76,
			want:  39,
		},
		{
			index: 545421,
			want:  272712,
		},
		{
			index: 50,
			want:  26,
		},
		{
			index: 25,
			want:  14,
		},
		{
			index: 87123641123172368,
			want:  43561820561586185,
		},
		{
			index: 81239812739128371,
			want:  40619906369564188,
		},
	}

	for _, test := range tests {
		gotFloat, _ := FloatSequence(test.index)
		if gotFloat != test.want {
			t.Errorf("FloatSequence(%v) = %v, want %v", test.index, gotFloat, test.want)
		}
	}
}

type test_big_float_sequence_struct struct {
	index *big.Float
	want  *big.Float
}

func TestBigFloatSequence(t *testing.T) {
	tests := []test_big_float_sequence_struct{
		{
			index: big.NewFloat(4),
			want:  big.NewFloat(3),
		},
		{
			index: big.NewFloat(76),
			want:  big.NewFloat(39),
		},
		{
			index: big.NewFloat(545421),
			want:  big.NewFloat(272712),
		},
		{
			index: big.NewFloat(50),
			want:  big.NewFloat(26),
		},
		{
			index: big.NewFloat(25),
			want:  big.NewFloat(14),
		},
		{
			index: big.NewFloat(87123641123172368),
			want:  big.NewFloat(43561820561586185),
		},
		{
			index: big.NewFloat(81239812739128371),
			want:  big.NewFloat(40619906369564188),
		},
	}

	for _, test := range tests {
		got := BigFloatSequence(test.index)
		if got.Cmp(test.want) != 0 {
			val, _ := got.Float64()
			t.Errorf("BigFloatSequence(%v) = %v, want %v", test.index, int64(val), test.want)
		}
	}
}

func TestModSequence(t *testing.T) {
	tests := []test_sequence_struct{
		{
			index: big.NewInt(4),
			want:  big.NewInt(3),
		},
		{
			index: big.NewInt(76),
			want:  big.NewInt(39),
		},
		{
			index: big.NewInt(545421),
			want:  big.NewInt(272712),
		},
		{
			index: big.NewInt(50),
			want:  big.NewInt(26),
		},
		{
			index: big.NewInt(25),
			want:  big.NewInt(14),
		},
		{
			index: big.NewInt(87123641123172368),
			want:  big.NewInt(43561820561586185),
		},
		{
			index: big.NewInt(81239812739128371),
			want:  big.NewInt(40619906369564188),
		},
	}

	for _, test := range tests {
		got, mod := ModSequence(test.index)
		if got.Cmp(test.want) != 0 {
			t.Errorf("ModSequence(%v) (%v) = %v, want %v", test.index, mod, got.String(), test.want)
		}
	}
}
