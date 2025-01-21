package ciper

import (
    "net/http"
    "github.com/gin-gonic/gin"
    "example.com/sa-67-example/config"
    "example.com/sa-67-example/entity"
)

func CreateCiper(c *gin.Context) {
	var ciper entity.Ciper

	// รับข้อมูล JSON ที่ส่งมาจาก client
	if err := c.ShouldBindJSON(&ciper); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Bad request, unable to map payload"})
		return
	}

	// บันทึกโปรโมชั่นใหม่ลงในฐานข้อมูล
	db := config.DB()
	if result := db.Create(&ciper); result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Failed to create promotion"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Promotion created successfully", "promotion": ciper})
}

func GetAllCiper(c *gin.Context) {
    var cipers []entity.Ciper
    db := config.DB()
    results := db.Preload("Ciper").Find(&cipers)

    if results.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": results.Error.Error()})
        return
    }

    c.JSON(http.StatusOK, cipers)
}

func GetCiper(c *gin.Context) {
    ID := c.Param("id")
    var ciper entity.Ciper
    db := config.DB()
    result := db.Preload("Ciper").First(&ciper, ID)

    if result.Error != nil {
        c.JSON(http.StatusNotFound, gin.H{"error": result.Error.Error()})
        return
    }

    if ciper.ID == 0 {
        c.JSON(http.StatusNoContent, gin.H{})
        return
    }

    c.JSON(http.StatusOK, ciper)
}

func CreateAnswer(c *gin.Context) {
	var answer entity.Answer

	// รับข้อมูล JSON ที่ส่งมาจาก client
	if err := c.ShouldBindJSON(&answer); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Answer incorrect"})
		return
	}

	// บันทึกโปรโมชั่นใหม่ลงในฐานข้อมูล
	db := config.DB()
	if result := db.Create(&answer); result.Error != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Answer incorrect"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Answer correct", "promotion": answer})
}