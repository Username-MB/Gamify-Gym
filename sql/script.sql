CREATE DATABASE if not exists gamify_gym;

USE gamify_gym;

/* TODOS os alimentos tem seus atributos baseados em 1g (uma grama)*/
CREATE TABLE if not exists foods(
	id_food INT AUTO_INCREMENT PRIMARY KEY,
    name_food VARCHAR(25) NOT NULL,
    calories DOUBLE NOT NULL,
    proteins DOUBLE NOT NULL,
    carbohydrates DOUBLE NOT NULL,
    total_sugar DOUBLE NOT NULL,
    added_sugar DOUBLE NOT NULL,
    total_fats DOUBLE NOT NULL,
    trans_fats DOUBLE NOT NULL,
    monounsaturated_fats DOUBLE NOT NULL,
    polyunsaturated_fats DOUBLE NOT NULL,
    satured_fats DOUBLE NOT NULL,
    fibers DOUBLE NOT NULL,
	sodium DOUBLE NOT NULL
);

CREATE TABLE if not exists exercises(
	id_exercise INT AUTO_INCREMENT PRIMARY KEY,
    name_exercises VARCHAR(25) NOT NULL,
    muscles VARCHAR(25) NOT NULL -- Músculos que são treinados nesse exercício separados por vírgulas
);

CREATE TABLE if not exists users(
	id_user INT AUTO_INCREMENT PRIMARY KEY,
    name_user VARCHAR(25) NOT NULL,
    password VARCHAR(25) NOT NULL
);

CREATE TABLE if not exists personal_trainers(
	id_personal_trainer INT AUTO_INCREMENT PRIMARY KEY,
    cref VARCHAR(20) NOT NULL UNIQUE,
    cpf VARCHAR(11) NOT NULL UNIQUE,
	user_id INT
);

CREATE TABLE if not exists players(
	id_player INT AUTO_INCREMENT PRIMARY KEY,
    height DOUBLE,
    weight DOUBLE,
    user_id INT,
	personal_trainer_id INT
);

/* Tabela para reduzir a redundãncia dos dados e associar as tabelas treinos e exercicios*/
CREATE TABLE if not exists exercises_workouts(
	id_exercise_workout INT AUTO_INCREMENT PRIMARY KEY,
	min_reps TINYINT, -- Atributo vinculado ao alcance de repetições
    max_reps TINYINT, -- Atributo vinculado ao alcance de repetições
    time TIME, -- Tempo em um exercício(prancha por exemplo)
    n_sets TINYINT NOT NULL,
    exercise_id INT,
    workout_id INT
);

CREATE TABLE if not exists workouts(
	id_workout INT AUTO_INCREMENT PRIMARY KEY,
    name_workouts VARCHAR(25) NOT NULL,
    description VARCHAR(255) NOT NULL, -- Espaço para o usuário colocar observações e etc
    player_id INT
);

DELIMITER //
CREATE PROCEDURE add_food (
	IN p_name_food VARCHAR(25),
    IN p_calories DOUBLE,
    IN p_proteins DOUBLE,
    IN p_carbohydrates DOUBLE,
    IN p_total_sugar DOUBLE,
    IN p_added_sugar DOUBLE,
    IN p_total_fats DOUBLE,
    IN p_trans_fats DOUBLE,
    IN p_monounsaturated_fats DOUBLE,
    IN p_polyunsaturated_fats DOUBLE,
    IN p_satured_fats DOUBLE, 
    IN p_fibers DOUBLE, 
	IN p_sodium DOUBLE 
)

BEGIN
	INSERT INTO foods(name_food, calories, proteins, carbohydrates, total_sugar, added_sugar, total_fats, trans_fats, monounsaturated_fats, polyunsaturated_fats,satured_fats, fibers, sodium)
	VALUES (p_name_food, p_calories, p_proteins, p_carbohydrates, p_total_sugar, p_added_sugar, p_total_fats, p_trans_fats, p_monounsaturated_fats, p_polyunsaturated_fats, p_satured_fats, p_fibers, p_sodium);
END //
DELIMITER ;

ALTER TABLE exercises_workouts
ADD CONSTRAINT fk_exercise
FOREIGN KEY (exercise_id) REFERENCES exercises(id_exercise)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE exercises_workouts
ADD CONSTRAINT fk_workout
FOREIGN KEY (workout_id) REFERENCES workouts(id_workout)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE workouts
ADD CONSTRAINT fk_player_workout
FOREIGN KEY (player_id) REFERENCES players(id_player)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE players
ADD CONSTRAINT fk_user_player
FOREIGN KEY (user_id) REFERENCES users(id_user)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE players
ADD CONSTRAINT fk_personal_trainer_player
FOREIGN KEY (personal_trainer_id) REFERENCES personal_trainers(id_personal_trainer)
ON DELETE CASCADE
ON UPDATE CASCADE;

ALTER TABLE personal_trainers
ADD CONSTRAINT fk_user_personal_trainer
FOREIGN KEY (user_id) REFERENCES users(id_user)
ON DELETE CASCADE
ON UPDATE CASCADE;