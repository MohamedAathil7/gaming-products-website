buffer_size = 0 
packets = int(input("Enter the total number of packets: "))  
bucket_size = int(input("Enter the bucket size: "))  
output = int(input("Enter the output data rate: "))  

for i in range(packets):
    input_packet_size = int(input("Enter the size of packet {}: ".format(i+1))) 
    space = bucket_size - buffer_size  

    if input_packet_size <= space:
        buffer_size += input_packet_size  
    else:
        packet_loss = input_packet_size - space 
        buffer_size = bucket_size  

        print(f"Packet loss = {packet_loss} Packets entered = {input_packet_size - packet_loss}")

    print(f"Buffer size = {buffer_size} before out of bucket size = {bucket_size}")

    buffer_size -= output  
    print(f"Buffer size = {buffer_size} after out of bucket size = {bucket_size}") 
    print("")