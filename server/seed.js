import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
    CREATE TABLE IF NOT EXISTS messages(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
		username TEXT,
		messageContent TEXT
	)
`);

db.exec(`
	INSERT INTO messages (username, messageContent)
	VALUES
	('AlCapownage', 'Why does my existence continue?'),
	('TingBlingPing', 'Life is Pain.'),
	('xxxAquaticAnteaterxxx', 'Why was I born, just to suffer'),
	('whyGodWhy', ':@D')
`);
