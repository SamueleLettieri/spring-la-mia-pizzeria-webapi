package com.example.pizzeria.webApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.pizzeria.webApi.model.Ingredienti;


public interface IngredientiRepository extends JpaRepository<Ingredienti, Integer>{

}
