
import { useParams } from "react-router-dom";
import ruskin from "../authors/ruskin.jpg"
import ernest from "../authors/ernest.jpg";
import george from "../authors/george.jpg";
import james from "../authors/james.jpeg";
import jk from "../authors/jk.jpg";
import thomas from "../authors/thomas.jpg";
import NotFound from "../component/pageNotfound";
import NavBar from "../component/navBar";
const Authors = () => {

    const author = [
        {
            name: 'Ruskin Bond',
            img: ruskin,
            dis: `Ruskin Bond, born on May 19, 1934, in Kasauli, Himachal Pradesh, is one of India’s most cherished authors. His early life was marked by the separation of his parents, and he spent his formative years in Dehradun, a town that became a central setting in many of his stories. After his schooling in Shimla, Bond moved to London for a few years, where he wrote his debut novel The Room on the Roof at the age of 17. This semi-autobiographical novel, reflecting the life of an Anglo-Indian teenager, won the prestigious John Llewellyn Rhys Prize in 1957.After returning to India, Bond lived in Mussoorie, where he continued his writing career. His works capture the simplicity and charm of hill station life, often drawing from his personal experiences. Bond’s storytelling is notable for its deep connection to nature, and he often writes about the beauty of the Indian landscape, childhood memories, and relationships.Some of his most acclaimed works include The Blue Umbrella, a novella that was adapted into a Bollywood film, and A Flight of Pigeons, which was adapted into the film Junoon. His short stories, including Time Stops at Shamli and The Night Train at Deoli, are also widely loved. His writing has an easy, evocative style that appeals to both children and adults, making him a favorite for readers across generations.In recognition of his contributions to literature, Bond has received several prestigious awards. In 1992, he was awarded the Sahitya Akademi Award for his short story collection Our Trees Still Grow in Dehra. He received the Padma Shri in 1999 and the Padma Bhushan in 2014, two of India’s highest civilian honors.Throughout his career, Bond has remained rooted in the tranquility of the hills, leading a quiet life in Mussoorie, where he continues to write, inspiring countless readers with his evocative tales of Indian life and nature`,
        },
        {
            name: 'J.K. Rowling',
            img: jk,

            dis: "J.K. Rowling, born on July 31, 1965, in Yate, Gloucestershire, England, is a British author best known for creating the globally renowned Harry Potter series. Growing up, Rowling had a passion for storytelling, often creating stories to entertain her younger sister. After graduating from the University of Exeter, she worked in various jobs, including as a researcher and bilingual secretary, while nurturing her desire to write Rowling conceived the idea for Harry Potter during a train ride from Manchester to London in 1990. Over the next few years, while facing personal challenges such as her mother’s death, a difficult marriage, and financial hardship, she began writing the series. By 1997, she published Harry Potter and the Philosopher’s Stone, which became an instant success. The Harry Potter series, consisting of seven books, follows the life of a young wizard, Harry Potter, and his battle against the dark wizard Lord Voldemort. The books became a worldwide phenomenon, selling over 500 million copies, translated into numerous languages, and adapted into a successful film franchise.The success of the series made Rowling one of the world’s most famous authors. She continued to expand the Harry Potter universe with spinoffs like Fantastic Beasts and The Cursed Child, while also writing crime novels under the pseudonym Robert Galbraith. Beyond literature, Rowling is known for her philanthropic work, supporting causes such as children’s welfare and multiple sclerosis research.Despite facing early rejections from publishers and personal struggles, Rowling’s achievements are monumental. She has received numerous accolades, including the British Book Awards, the Légion d'Honneur from France, and honorary degrees from universities like Harvard. Her journey from being a single mother on welfare to becoming one of the most successful authors of all time is an inspiration to millions."

        },
        {
            name: 'George Orwell',
            img: george,
            dis: `George Orwell, born Eric Arthur Blair on June 25, 1903, in Motihari, British India, was a British writer, journalist, and social critic, best known for his dystopian novels and essays on politics, society, and totalitarianism. Orwell’s early life was marked by his time in British colonial service in Burma, which deepened his growing disdain for imperialism and shaped his critical perspective on power and oppression.He adopted the pen name George Orwell in the 1930s and began his literary career with works that examined the lives of the poor and working-class. His first major success came with Down and Out in Paris and London (1933), a memoir based on his experiences living among the destitute in both cities. He continued to write about social justice and inequality in works like The Road to Wigan Pier (1937), which exposed the harsh conditions of working-class life in Northern England during the Great Depression.Orwell is best known for his two seminal works, Animal Farm (1945) and 1984 (1949). Animal Farm is a political allegory that satirizes the Russian Revolution and the rise of Stalinism, using a farmyard of animals to symbolize various political figures and ideologies. 1984, a dystopian novel, explores themes of surveillance, propaganda, and totalitarianism, and introduced terms like "Big Brother," "doublethink," and "thoughtcrime" into the popular lexicon. Both novels remain widely read and taught for their timeless critique of political power and control.Orwell’s writing, particularly his essays, showcased his sharp intellect and moral clarity, addressing topics ranging from fascism and socialism to language and truth. His experiences fighting in the Spanish Civil War, which he recounted in Homage to Catalonia (1938), further solidified his anti-totalitarian stance, influencing much of his later work.Orwell passed away from tuberculosis on January 21, 1950, but his works continue to be celebrated for their insight into political systems and the human condition. His legacy endures as one of the most important voices of the 20th century, with his warnings about the dangers of authoritarianism and the manipulation of truth resonating in modern times.`
        },
        {
            name: 'Ernest',
            img: ernest,
            dis: `Ernest Hemingway, born on July 21, 1899, in Oak Park, Illinois, was an iconic American novelist, short-story writer, and journalist. Known for his distinctive writing style characterized by succinct, direct prose and minimalism, Hemingway is considered one of the most influential writers of the 20th century. His works often explore themes of courage, masculinity, war, and the human struggle against nature.Hemingway’s early experiences shaped much of his literary output. After high school, he worked as a reporter for The Kansas City Star, where he honed his concise writing style. During World War I, Hemingway served as an ambulance driver in Italy, an experience that influenced his novel A Farewell to Arms (1929), a tragic love story set against the backdrop of the war. After the war, he moved to Paris, where he became part of the "Lost Generation," a group of expatriate writers and artists that included F. Scott Fitzgerald and Gertrude Stein.In the 1920s and 1930s, Hemingway gained widespread recognition for works such as The Sun Also Rises (1926), which captures the postwar disillusionment of expatriates in Europe, and For Whom the Bell Tolls (1940), set during the Spanish Civil War. His writing is often praised for its exploration of stoicism and grace under pressure, with characters known as "Hemingway heroes" who confront violence, death, and existential dilemmas.Hemingway's adventurous life greatly influenced his fiction. He was an avid sportsman, big-game hunter, and deep-sea fisherman, and many of his stories draw on these interests. His novel The Old Man and the Sea (1952), which tells the story of an aging fisherman’s battle with a giant marlin, earned him the Pulitzer Prize in 1953 and contributed to his being awarded the Nobel Prize in Literature in 1954.Despite his success, Hemingway's later years were marked by personal struggles, including depression and alcoholism. He took his own life on July 2, 1961, in Ketchum, Idaho. Today, Hemingway’s works remain widely read and revered for their impact on modern literature, especially his ability to convey profound emotions with simplicity and precision. His legacy as a master of narrative form continues to influence writers and readers alike.`

        },
        {
            name: 'Thomas Keneally',
            img: thomas,
            dis: "Thomas Keneally, born on October 7, 1935, in Sydney, Australia, is a distinguished Australian novelist, playwright, and essayist. Best known for his historical fiction, Keneally's works often explore significant moments in history, with a focus on the resilience and moral dilemmas of the human spirit.Initially training for the priesthood, Keneally left the seminary before being ordained and turned his attention to writing. His first novel, The Place at Whitton, was published in 1964, and over the next few decades, he established himself as a significant voice in Australian literature. Keneally's novels often tackle historical subjects and are notable for their detailed research and ethical depth.His most famous work, Schindler’s Ark (1982), won the Booker Prize and was adapted into the acclaimed film Schindler’s List by Steven Spielberg. The novel tells the true story of Oskar Schindler, a German businessman who saved the lives of over a thousand Jews during the Holocaust. This novel brought Keneally international fame and solidified his place as one of the great chroniclers of history through fiction.Throughout his career, Keneally has published more than 30 novels, as well as numerous plays, essays, and works of nonfiction. His other notable works include The Chant of Jimmie Blacksmith (1972), a powerful narrative about an Aboriginal man’s fight against racial injustice, and The Daughters of Mars (2012), a novel about Australian nurses during World War I.Keneally has received many awards for his contributions to literature, including the Miles Franklin Award, Australia’s most prestigious literary honor, and several Commonwealth Literary Prizes. He remains one of Australia’s most respected and influential writers, known for blending history and fiction to explore complex moral and ethical issues."

        },
        {
            name: 'James Clear',
            img: james,
            dis: `James Clear is a prominent American author, speaker, and productivity expert, best known for his bestselling book Atomic Habits. Born in Ohio, Clear became widely recognized for his insights into habit formation, behavior change, and personal development. His work focuses on the science of small habits and how incremental improvements can lead to significant personal and professional transformation.Clear’s journey toward becoming a leading voice in habit-building began after a life-altering injury in high school that set him on a path of recovery and self-improvement. Over time, he became interested in the psychology of habits and behavior change, which he began to explore through writing. He initially started a blog that grew a large following, where he shared actionable advice on how to develop better habits, improve productivity, and reach goals.In 2018, Clear published Atomic Habits, which quickly became an international bestseller. The book is widely praised for its clear, actionable strategies for breaking bad habits and building good ones. One of the key concepts in the book is the idea of "1% improvement," which emphasizes the power of making small, consistent changes over time. Atomic Habits has sold millions of copies worldwide and has been translated into numerous languages, cementing Clear’s reputation as a leader in the self-improvement space.Beyond writing, Clear is also a sought-after speaker and consultant, sharing his insights with major corporations, athletes, and individuals looking to improve their personal and professional lives. His newsletter, "3-2-1," is read by millions of subscribers, offering short, practical tips on productivity and habit formation. Through his work, Clear has had a lasting impact on the way people think about personal growth, making habit formation a more approachable and science-backed process.`
        }
    ];
    let { name } = useParams();

    let displayAuthor = author.filter((items) =>
        items.name === name
    )
    if (displayAuthor.length === 0) {
        return <NotFound />
    }
    return (
        <div className="author-container">
            <NavBar />
            <div className="auth-heading">
                <img src={displayAuthor[0].img} />
                <h1>{displayAuthor[0].name}</h1>
            </div>
            <div className="auth-description">
                <p>{displayAuthor[0].dis}</p>
            </div>
        </div>
    )

}
export default Authors;