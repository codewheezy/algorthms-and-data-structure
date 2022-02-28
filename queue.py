# A queue is a useful data structure in programming. 
# It is similar to the ticket queue outside a cinema hall, where the first person entering 
# the queue is the first person who gets the ticket.
# Queue follows the First In First Out (FIFO) rule 
# - the item that goes in first is the item that comes out first.
# In programming terms, putting items in the queue is called enqueue, 
# and removing items from the queue is called dequeue.

# Basic operations that are allowed on queue
# A Queue is an object (an abstract data structure - ADT) that allows the following operations.

# Enqueue: Add an element to the end of the queue
# Dequeue: Remove an element from the front of the queue
# IsEmpty: Check if the queue is empty
# IsFull: Check if the queue is full
# Peek: Get the value of the front of the queue without removing

class Queue:
    def __init(self):
        self.queue = []
        