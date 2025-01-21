package entity

import (
	"gorm.io/gorm"
)

type Answer struct {
	gorm.Model
	Answer  string       `json:"answer"`                             // Foreign key to Challenges
}
