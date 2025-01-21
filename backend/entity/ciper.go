package entity


import (
	"gorm.io/gorm"

)

type Ciper struct {
    gorm.Model
    Name       	string `json:"name"`
    Description string `json:"description"`
    Type        string `json:"type"`        // Symmetric, Asymmetric, Hash
    Difficulty  string  `json:"difficulty"`  // ความยาก
    Ciper       string  `json:"ciper"`      // ลำดับของ Challenge
}